import { defineComponent, h, nextTick } from 'vue';
import { useMantineColorScheme, type MantineTheme } from '@mantine-vue/core';
import { fireEvent, render, screen } from './render';
import { jcTheme } from '../src/theme/theme';
import { chartColors, ramps, semantic } from '../src/theme/tokens';

// jsdom não tem canvas: os gráficos do Mantine Vue viram stubs que guardam as props e o tema do ECharts recebidos
const captured = vi.hoisted(() => ({}) as Record<string, { props: Record<string, any>; theme: Record<string, any> }>);

vi.mock('@mantine-vue/charts', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@mantine-vue/charts')>();
  const vue = await import('vue');
  const { THEME_KEY } = await import('vue-echarts');
  const stub = (name: string) =>
    vue.defineComponent({
      name: `Stub${name}`,
      inheritAttrs: false,
      setup(_, { attrs }) {
        const theme = vue.inject(THEME_KEY, null);
        return () => {
          captured[name] = { props: { ...attrs }, theme: vue.toValue(theme) as Record<string, any> };
          return vue.h('div', { 'data-chart': name });
        };
      },
    });
  const names = [
    'LineChart', 'AreaChart', 'BarChart', 'CompositeChart', 'RadarChart', 'DonutChart', 'PieChart', 'Sparkline',
    'ScatterChart', 'BubbleChart', 'FunnelChart', 'RadialBarChart', 'BarsList', 'Heatmap', 'MatrixChart',
    'GaugeChart', 'WaffleChart', 'Treemap', 'SankeyChart', 'CandlestickChart',
  ];
  return { ...actual, ...Object.fromEntries(names.map((name) => [name, stub(name)])) };
});

const {
  AreaChart,
  BarChart,
  BarsList,
  ChartCard,
  DonutChart,
  GaugeChart,
  Heatmap,
  LineChart,
  PieChart,
  RadarChart,
  SankeyChart,
  Sparkline,
  chartPalette,
  createJcEChartsTheme,
  mergeChartOptions,
  paletteColor,
  ptBRValueFormatter,
  resolveChartColor,
  withPalette,
} = await import('../src/charts');

const theme = jcTheme as unknown as MantineTheme;
const data = [
  { mes: 'Jan', vendas: 54959, meta: 50000 },
  { mes: 'Fev', vendas: 61230, meta: 55000 },
];

/** Botão que alterna o esquema de cores (o render do teste começa no claro). */
const SchemeToggle = defineComponent({
  setup() {
    const { setColorScheme } = useMantineColorScheme();
    return () => h('button', { onClick: () => setColorScheme('dark') }, 'escuro');
  },
});

describe('palette', () => {
  it('chartPalette usa variáveis CSS e paletteColor cicla', () => {
    expect(chartPalette[0]).toBe('var(--jc-chart-1)');
    expect(paletteColor(0)).toBe('var(--jc-chart-1)');
    expect(paletteColor(chartPalette.length + 1)).toBe('var(--jc-chart-2)');
  });

  it('withPalette só preenche quem não tem cor', () => {
    expect(withPalette([{ name: 'a' }, { name: 'b', color: 'danger' }, { name: 'c' }])).toEqual([
      { name: 'a', color: 'var(--jc-chart-1)' },
      { name: 'b', color: 'danger' },
      { name: 'c', color: 'var(--jc-chart-3)' },
    ]);
  });

  it('ptBRValueFormatter formata em pt-BR', () => {
    expect(ptBRValueFormatter(54959)).toBe('54.959');
    expect(ptBRValueFormatter(1234.5)).toBe('1.234,5');
  });
});

describe('resolveChartColor', () => {
  it.each(['light', 'dark'] as const)('var(--jc-chart-N) → hex da paleta (%s)', (scheme) => {
    expect(resolveChartColor('var(--jc-chart-1)', theme, scheme)).toBe(chartColors[scheme][0]);
    expect(resolveChartColor(chartPalette[2], theme, scheme)).toBe(chartColors[scheme][2]);
  });

  it('cores do tema usam o primaryShade do esquema quando não há tom', () => {
    expect(resolveChartColor('horizon', theme, 'light')).toBe(ramps.horizon[600]);
    expect(resolveChartColor('horizon', theme, 'dark')).toBe(ramps.horizon[400]);
    expect(resolveChartColor('blue', theme, 'light')).toBe(ramps.horizon[600]);
    expect(resolveChartColor('green', theme, 'dark')).toBe(ramps.evergreen[400]);
  });

  it('tom explícito e var(--mantine-color-*) independem do esquema', () => {
    expect(resolveChartColor('danger.2', theme, 'light')).toBe(ramps.danger[200]);
    expect(resolveChartColor('danger.2', theme, 'dark')).toBe(ramps.danger[200]);
    expect(resolveChartColor('var(--mantine-color-horizon-8)', theme, 'dark')).toBe(ramps.horizon[800]);
  });

  it('vazio → undefined; hex/rgb/desconhecidos passam intactos', () => {
    expect(resolveChartColor(undefined, theme, 'light')).toBeUndefined();
    expect(resolveChartColor('', theme, 'light')).toBeUndefined();
    expect(resolveChartColor('#123456', theme, 'dark')).toBe('#123456');
    expect(resolveChartColor('rgb(1, 2, 3)', theme, 'dark')).toBe('rgb(1, 2, 3)');
    expect(resolveChartColor('rebeccapurple', theme, 'dark')).toBe('rebeccapurple');
  });
});

describe('createJcEChartsTheme', () => {
  it.each(['light', 'dark'] as const)('usa os tokens semânticos (%s)', (scheme) => {
    const t = createJcEChartsTheme(scheme) as Record<string, any>;
    expect(t.tooltip.backgroundColor).toBe(semantic[scheme].surface);
    expect(t.tooltip.borderColor).toBe(semantic[scheme].borderSoft);
    expect(t.tooltip.textStyle.color).toBe(semantic[scheme].text);
    expect(t.tooltip.extraCssText).toContain(semantic[scheme].shadowMd);
    expect(t.valueAxis.splitLine.lineStyle.color).toBe(semantic[scheme].borderSoft);
    expect(t.legend.textStyle.color).toBe(semantic[scheme].text2);
    expect(t.color).toEqual([...chartColors[scheme]]);
  });

  it('mergeChartOptions mescla em profundidade e o segundo vence', () => {
    expect(mergeChartOptions({ a: { b: 1, c: 2 }, d: [1] }, { a: { c: 3 }, d: [2] })).toEqual({ a: { b: 1, c: 3 }, d: [2] });
  });
});

describe('wrappers', () => {
  beforeEach(() => {
    for (const key of Object.keys(captured)) delete captured[key];
  });

  it('LineChart: padrões JC, paleta em hex e eixos do esquema', () => {
    render(() =>
      h(LineChart, { data, dataKey: 'mes', series: [{ name: 'vendas' }, { name: 'meta', color: 'danger' }] }),
    );
    const { props } = captured.LineChart;
    expect(props).toMatchObject({ height: 280, curveType: 'monotone', strokeWidth: 2.5, dataKey: 'mes' });
    expect(props.series).toEqual([
      { name: 'vendas', color: chartColors.light[0] },
      { name: 'meta', color: ramps.danger[600] },
    ]);
    expect(props.valueFormatter(54959)).toBe('54.959');
    expect(props.textColor).toBe(semantic.light.text3);
    expect(props.yAxisProps.axisLabel.color).toBe(semantic.light.text3);
    expect(props.yAxisProps.axisLabel.formatter(1000)).toBe('1.000');
    expect(props.yAxisProps.splitLine.lineStyle.color).toBe(semantic.light.borderSoft);
    expect(captured.LineChart.theme.tooltip.backgroundColor).toBe(semantic.light.surface);
  });

  it('atalho booleano do template (`with-legend`) vira true; string vazia em outras props é mantida', () => {
    render(() => h(LineChart, { data, dataKey: 'mes', series: [{ name: 'vendas' }], 'with-legend': '', 'with-tooltip': false, unit: '' }));
    const { props } = captured.LineChart;
    expect(props.withLegend).toBe(true);
    expect(props.withTooltip).toBe(false);
    expect(props.unit).toBe('');
  });

  it('props do usuário têm prioridade (height, h, curveType, formatter, eixos)', () => {
    const fmt = (v: number) => `${v}!`;
    render(() =>
      h(AreaChart, {
        data,
        dataKey: 'mes',
        series: [{ name: 'vendas', color: '#ff00ff' }],
        h: 200,
        'curve-type': 'linear',
        valueFormatter: fmt,
        yAxisProps: { axisLabel: { fontSize: 10 } },
      }),
    );
    const { props } = captured.AreaChart;
    expect(props).toMatchObject({ height: 200, curveType: 'linear', fillOpacity: 0.25 });
    expect(props.h).toBeUndefined();
    expect(props.series[0].color).toBe('#ff00ff');
    expect(props.valueFormatter).toBe(fmt);
    expect(props.yAxisProps.axisLabel).toMatchObject({ fontSize: 10, color: semantic.light.text3 });
    expect(props.yAxisProps.axisLabel.formatter(3)).toBe('3!');
  });

  it('BarChart: barras arredondadas, retas quando empilhadas; eixo de valor segue a orientação', () => {
    const series = [{ name: 'vendas' }, { name: 'meta' }];
    const { unmount } = render(() => h(BarChart, { data, dataKey: 'mes', series }));
    expect(captured.BarChart.props.height).toBe(280);
    expect(captured.BarChart.theme.bar.itemStyle.borderRadius).toEqual([4, 4, 0, 0]);
    expect(captured.BarChart.props.series.map((s: { color: string }) => s.color)).toEqual(chartColors.light.slice(0, 2));
    unmount();

    render(() => h(BarChart, { data, dataKey: 'mes', series, type: 'stacked', orientation: 'vertical' }));
    expect(captured.BarChart.props).toMatchObject({ type: 'stacked', orientation: 'vertical' });
    expect(captured.BarChart.theme.bar.itemStyle.borderRadius).toEqual([0, 0, 0, 0]);
    expect(captured.BarChart.props.xAxisProps.axisLabel.formatter(1000)).toBe('1.000');
  });

  it('DonutChart e PieChart: padrões, paleta e tooltip pt-BR', () => {
    const cells = [
      { name: 'Pix', value: 10 },
      { name: 'Cartão', value: 20, color: 'electric.3' },
    ];
    render(() => [h(DonutChart, { data: cells }), h(PieChart, { data: cells, size: 220 })]);
    const donut = captured.DonutChart.props;
    expect(donut).toMatchObject({ height: 160, withTooltip: true, paddingAngle: 2, thickness: 52 });
    expect(donut.data.map((d: { color: string }) => d.color)).toEqual([chartColors.light[0], ramps.electric[300]]);
    expect(donut.tooltipProps.valueFormatter(1234)).toBe('1.234');
    expect(donut.chartLabelColor).toBe(semantic.light.text);
    expect(captured.PieChart.props).toMatchObject({ height: 220, withTooltip: true });
  });

  it('Sparkline e RadarChart: padrões JC', () => {
    render(() => [
      h(Sparkline, { data: [1, 3, 2] }),
      h(RadarChart, { data, dataKey: 'mes', series: [{ name: 'vendas' }] }),
    ]);
    expect(captured.Sparkline.props).toMatchObject({
      height: 48,
      curveType: 'monotone',
      color: chartColors.light[0],
      fillOpacity: 0.3,
      strokeWidth: 2,
    });
    expect(captured.RadarChart.props.height).toBe(300);
    expect(captured.RadarChart.props.series[0].color).toBe(chartColors.light[0]);
    expect(captured.RadarChart.theme.radar.axisName.color).toBe(semantic.light.text2);
  });

  it('demais gráficos recebem paleta/escala em hex', () => {
    render(() => [
      h(BarsList, { data: [{ name: 'a', value: 1 }] }),
      h(Heatmap, { data: {} }),
      h(GaugeChart, { value: 40 }),
      h(SankeyChart, { nodes: [{ name: 'a' }, { name: 'b' }], links: [] }),
    ]);
    expect(captured.BarsList.props.barColor).toBe(chartColors.light[0]);
    expect(captured.Heatmap.props.colors).toEqual([ramps.horizon[100], ramps.horizon[300], ramps.horizon[500], ramps.horizon[700]]);
    expect(captured.GaugeChart.props).toMatchObject({ filledColor: chartColors.light[0], trackColor: semantic.light.borderSoft });
    expect(captured.SankeyChart.props.nodes[1].itemStyle.color).toBe(chartColors.light[1]);
  });

  it('recolore ao alternar para o tema escuro', async () => {
    render(() => [
      h(SchemeToggle),
      h(LineChart, { data, dataKey: 'mes', series: [{ name: 'vendas' }, { name: 'meta', color: 'horizon' }] }),
    ]);
    expect(captured.LineChart.props.series[1].color).toBe(ramps.horizon[600]);

    await fireEvent.click(screen.getByRole('button', { name: 'escuro' }));
    await nextTick();
    const { props, theme: echartsTheme } = captured.LineChart;
    expect(props.series.map((s: { color: string }) => s.color)).toEqual([chartColors.dark[0], ramps.horizon[400]]);
    expect(props.textColor).toBe(semantic.dark.text3);
    expect(echartsTheme.tooltip.backgroundColor).toBe(semantic.dark.surface);
    expect(echartsTheme.valueAxis.splitLine.lineStyle.color).toBe(semantic.dark.borderSoft);
  });
});

describe('ChartCard', () => {
  it('renderiza cabeçalho, gráfico e emite update:period', async () => {
    const onUpdate = vi.fn();
    render(() =>
      h(
        ChartCard,
        {
          kicker: 'Vendas',
          title: 'Faturamento',
          description: 'Últimos 30 dias',
          value: 'R$ 54.959',
          periods: ['7d', '30d'],
          period: '30d',
          'onUpdate:period': onUpdate,
        },
        { default: () => h('div', 'gráfico'), actions: () => h('button', 'Exportar') },
      ),
    );
    for (const text of ['Vendas', 'Faturamento', 'Últimos 30 dias', 'R$ 54.959', 'gráfico', 'Exportar']) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
    await fireEvent.click(screen.getByLabelText('7d'));
    expect(onUpdate).toHaveBeenCalledWith('7d');
  });

  it('slot vence a prop', () => {
    render(() => h(ChartCard, { title: 'Prop' }, { title: () => 'Slot', default: () => null }));
    expect(screen.getByText('Slot')).toBeInTheDocument();
    expect(screen.queryByText('Prop')).toBeNull();
  });
});
