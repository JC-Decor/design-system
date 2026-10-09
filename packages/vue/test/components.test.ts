import { defineComponent, h, nextTick, ref } from 'vue';
import userEvent from '@testing-library/user-event';
import { render as tlRender } from '@testing-library/vue';
import {
  ColorRamp,
  ContentCard,
  CouponCode,
  DataTable,
  JcProvider,
  KpiCard,
  KpiGroup,
  PageHeader,
  PriceTag,
  ProductCard,
  PromoBanner,
  ThemeToggle,
  TokenSwatch,
  getDeltaTone,
  type DataTableSort,
} from '../src';
import { render, screen, within } from './render';

/** Componente de link falso (como um RouterLink) para checar `to` + `href`. */
const FakeLink = defineComponent({
  name: 'FakeLink',
  props: { to: { type: String, required: true } },
  setup(props, { slots, attrs }) {
    return () => h('a', { ...attrs, 'data-to': props.to }, slots.default?.());
  },
});

describe('KpiCard', () => {
  it('formata número e colore variação negativa como erro', () => {
    render(() => h(KpiCard, { label: 'Acessos', value: 54959, delta: -5.6 }));
    expect(screen.getByText('54.959')).toBeInTheDocument();
    expect(screen.getByText('-5,6%')).toBeInTheDocument();
    const root = screen.getByText('Acessos').closest('[style]') as HTMLElement;
    expect(root.style.getPropertyValue('--kpi-delta-color')).toBe('var(--ds-error)');
    expect(screen.getByText('-5,6%').closest('[data-tone]')).toHaveAttribute('data-tone', 'down');
  });

  it('colorValue pinta o valor e invertDelta inverte o tom', () => {
    render(() => h(KpiCard, { label: 'Rejeição', value: '32%', delta: -2, invertDelta: true, colorValue: true }));
    const root = screen.getByText('Rejeição').closest('[style]') as HTMLElement;
    expect(root.style.getPropertyValue('--kpi-delta-color')).toBe('var(--ds-success)');
    expect(root.style.getPropertyValue('--kpi-value-color')).toBe('var(--ds-success)');
  });

  it('slots têm prioridade sobre as props', () => {
    render(() =>
      h(KpiCard, { label: 'Prop', value: 1 }, { label: () => 'Rótulo do slot', value: () => h('b', 'Valor do slot'), chart: () => 'Gráfico' }),
    );
    expect(screen.getByText('Rótulo do slot')).toBeInTheDocument();
    expect(screen.queryByText('Prop')).not.toBeInTheDocument();
    expect(screen.getByText('Valor do slot').tagName).toBe('B');
    expect(screen.getByText('Gráfico')).toBeInTheDocument();
  });

  it('aceita classNames do Styles API e esconde valor em loading', () => {
    render(() => h(KpiCard, { label: 'Pedidos', value: 10, delta: 3, loading: true, classNames: { label: 'meu-label' } }));
    expect(screen.getByText('Pedidos')).toHaveClass('meu-label');
    expect(screen.queryByText('10')).not.toBeInTheDocument();
    expect(screen.queryByText('+3%')).not.toBeInTheDocument();
  });

  it('getDeltaTone respeita invertDelta', () => {
    expect(getDeltaTone(3)).toBe('up');
    expect(getDeltaTone(-3)).toBe('down');
    expect(getDeltaTone(-3, true)).toBe('up');
    expect(getDeltaTone(0)).toBe('flat');
  });

  it('KpiGroup renderiza os filhos', () => {
    render(() => h(KpiGroup, null, () => [h(KpiCard, { label: 'A', value: 1 }), h(KpiCard, { label: 'B', value: 2 })]));
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });
});

describe('PriceTag', () => {
  it('mostra parcelamento e Pix', () => {
    render(() => h(PriceTag, { value: 100, oldValue: 150, installments: { count: 10 }, pixDiscount: 5 }));
    expect(screen.getByText(/10x de R\$\s10,00 sem juros/)).toBeInTheDocument();
    expect(screen.getByText(/R\$\s95,00 no Pix/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Preço anterior R\$\s150,00/)).toBeInTheDocument();
  });

  it('omite preço antigo quando não é maior e respeita interestFree=false', () => {
    render(() => h(PriceTag, { value: 100, oldValue: 90, installments: { count: 2, interestFree: false }, unit: '/m²' }));
    expect(screen.queryByLabelText(/Preço anterior/)).not.toBeInTheDocument();
    expect(screen.getByText(/2x de R\$\s50,00$/)).toBeInTheDocument();
    expect(screen.getByText('/m²')).toBeInTheDocument();
  });
});

describe('ProductCard', () => {
  it('calcula selo de desconto', () => {
    render(() => h(ProductCard, { name: 'Piso vinílico', image: 'x.jpg', price: 80, oldPrice: 100 }));
    expect(screen.getByText('-20%')).toBeInTheDocument();
  });

  it('sem v-model:favorite nem @action não mostra coração nem CTA', () => {
    render(() => h(ProductCard, { name: 'Piso', image: 'x.jpg', price: 80 }));
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('v-model:favorite alterna o favorito', async () => {
    const favorite = ref(false);
    render(() =>
      h(ProductCard, {
        name: 'Piso',
        image: 'x.jpg',
        price: 80,
        favorite: favorite.value,
        'onUpdate:favorite': (value: boolean) => (favorite.value = value),
      }),
    );
    const button = screen.getByRole('button', { name: 'Adicionar aos favoritos' });
    expect(button).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(button);
    expect(favorite.value).toBe(true);
    expect(screen.getByRole('button', { name: 'Remover dos favoritos' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('@action mostra o CTA e torna o card interativo', async () => {
    const onAction = vi.fn();
    render(() => h(ProductCard, { name: 'Piso', image: 'x.jpg', price: 80, onAction }));
    await userEvent.click(screen.getByRole('button', { name: 'Comprar' }));
    expect(onAction).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Piso').closest('[data-interactive]')).not.toBeNull();
  });

  it('linkComponent recebe `to` e `href`; badges por prop e slot', () => {
    render(() =>
      h(
        ProductCard,
        { name: 'Grama', image: 'x.jpg', price: 50, href: '/grama', linkComponent: FakeLink, badges: ['Novo'] },
        { badges: () => h('span', 'Frete grátis') },
      ),
    );
    const link = screen.getByText('Grama').closest('a')!;
    expect(link).toHaveAttribute('href', '/grama');
    expect(link).toHaveAttribute('data-to', '/grama');
    expect(screen.getByText('Novo')).toBeInTheDocument();
    expect(screen.getByText('Frete grátis')).toBeInTheDocument();
  });
});

describe('PromoBanner', () => {
  it('renderiza destaque e fecha', async () => {
    const onClose = vi.fn();
    render(() => h(PromoBanner, { highlight: 'JCMAIO', withCloseButton: true, onClose }, () => '5% OFF na 1ª compra cupom:'));
    expect(screen.getByText('JCMAIO').tagName).toBe('STRONG');
    expect(screen.getByRole('note')).toHaveAttribute('data-closable');
    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }));
    expect(onClose).toHaveBeenCalled();
    expect(screen.queryByText('JCMAIO')).not.toBeInTheDocument();
  });

  it('slot highlight tem prioridade sobre a prop', () => {
    render(() => h(PromoBanner, { highlight: 'PROP' }, { default: () => 'Cupom:', highlight: () => 'SLOT' }));
    expect(screen.getByText('SLOT').tagName).toBe('STRONG');
    expect(screen.queryByText('PROP')).not.toBeInTheDocument();
  });

  it('v-model:opened: controlado, só some quando o pai atualiza', async () => {
    const onUpdate = vi.fn();
    const opened = ref(true);
    render(() => h(PromoBanner, { opened: opened.value, withCloseButton: true, 'onUpdate:opened': onUpdate }, () => 'Promo'));
    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }));
    expect(onUpdate).toHaveBeenCalledWith(false);
    expect(screen.getByText('Promo')).toBeInTheDocument();
    opened.value = false;
    await nextTick();
    expect(screen.queryByText('Promo')).not.toBeInTheDocument();
  });

  it('variant e theme.components.PromoBanner.defaultProps', () => {
    tlRender(
      defineComponent({
        setup: () => () =>
          h(
            JcProvider,
            { env: 'test', colorSchemeStorageKey: false, theme: { components: { PromoBanner: { defaultProps: { variant: 'electric' } } } } },
            () => h(PromoBanner, { radius: 'md' }, () => 'Tema'),
          ),
      }),
    );
    const root = screen.getByRole('note');
    expect(root.style.getPropertyValue('--banner-bg')).toBe('var(--dc-electric)');
    expect(root).toHaveAttribute('data-variant', 'electric');
    expect(root).toHaveAttribute('data-radius');
  });
});

describe('ContentCard', () => {
  it('renderiza imagem por URL, kicker, título, corpo e ações', () => {
    render(() => h(ContentCard, { image: 'capa.jpg', imageAlt: 'Capa', kicker: 'Blog', title: 'Título', actions: h('button', 'Ler') }, () => 'Corpo'));
    expect(screen.getByRole('img', { name: 'Capa' })).toHaveStyle({ height: '180px' });
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Título')).toBeInTheDocument();
    expect(screen.getByText('Corpo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ler' })).toBeInTheDocument();
  });

  it('slots têm prioridade e partes vazias não são renderizadas', () => {
    const { container } = render(() => h(ContentCard, { title: 'Prop' }, { title: () => 'Slot', image: () => h('video', { 'data-testid': 'video' }) }));
    expect(screen.getByText('Slot')).toBeInTheDocument();
    expect(screen.queryByText('Prop')).not.toBeInTheDocument();
    expect(screen.getByTestId('video')).toBeInTheDocument();
    expect(container.querySelector('.body')).toBeNull();
    expect(container.querySelector('.actions')).toBeNull();
  });
});

describe('PageHeader', () => {
  it('breadcrumbs com linkComponent passam `to` e `href`', () => {
    render(() =>
      h(PageHeader, {
        title: 'Pedidos',
        kicker: 'Painel',
        description: 'Todos os pedidos',
        linkComponent: FakeLink,
        breadcrumbs: [{ label: 'Início', href: '/' }, { label: 'Pedidos' }],
      }),
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Pedidos' })).toBeInTheDocument();
    const link = screen.getByText('Início').closest('a')!;
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveAttribute('data-to', '/');
    expect(screen.getByText('Painel')).toBeInTheDocument();
    expect(screen.getByText('Todos os pedidos')).toBeInTheDocument();
  });

  it('slots title/actions têm prioridade', () => {
    render(() => h(PageHeader, { title: 'Prop' }, { title: () => 'Do slot', actions: () => h('button', 'Novo') }));
    expect(screen.getByRole('heading', { level: 1, name: 'Do slot' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Novo' })).toBeInTheDocument();
  });
});

describe('CouponCode', () => {
  it('copia e emite `copy` com o código', async () => {
    const user = userEvent.setup();
    const onCopy = vi.fn();
    render(() => h(CouponCode, { code: 'JCMAIO', description: '5% OFF', onCopy }));
    expect(screen.getByText('5% OFF')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Copiar' }));
    expect(onCopy).toHaveBeenCalledWith('JCMAIO');
    expect(await screen.findByRole('button', { name: 'Copiado!' })).toBeInTheDocument();
    expect(await navigator.clipboard.readText()).toBe('JCMAIO');
  });

  it('slot description tem prioridade', () => {
    render(() => h(CouponCode, { code: 'X', description: 'Prop' }, { description: () => 'Slot' }));
    expect(screen.getByText('Slot')).toBeInTheDocument();
    expect(screen.queryByText('Prop')).not.toBeInTheDocument();
  });
});

describe('ThemeToggle', () => {
  it('alterna o esquema de cores', async () => {
    render(() => h(ThemeToggle));
    const button = screen.getByRole('button', { name: 'Alternar tema' });
    expect(document.documentElement).toHaveAttribute('data-mantine-color-scheme', 'light');
    await userEvent.click(button);
    expect(document.documentElement).toHaveAttribute('data-mantine-color-scheme', 'dark');
    await userEvent.click(button);
    expect(document.documentElement).toHaveAttribute('data-mantine-color-scheme', 'light');
  });

  it('as="button" mostra o rótulo', () => {
    render(() => h(ThemeToggle, { as: 'button', label: 'Tema' }));
    expect(screen.getByRole('button', { name: 'Tema' })).toBeInTheDocument();
  });
});

describe('TokenSwatch / ColorRamp', () => {
  it('copia a variável CSS', async () => {
    const user = userEvent.setup();
    render(() => h(TokenSwatch, { name: 'Horizon', value: '#2663EB', cssVar: '--dc-horizon', copy: 'cssVar' }));
    await user.click(screen.getByRole('button', { name: /Horizon/ }));
    expect(await navigator.clipboard.readText()).toBe('var(--dc-horizon)');
  });

  it('rampa marca passos derivados', () => {
    render(() => h(ColorRamp, { steps: [{ label: '700', value: '#1D4ED8' }, { label: '50', value: '#EFF6FF', derived: true }] }));
    expect(screen.getByRole('button', { name: '700' })).toHaveStyle({ color: 'rgb(255, 255, 255)' });
    expect(screen.getByRole('button', { name: '50*' })).toBeInTheDocument();
  });
});

describe('DataTable', () => {
  type Row = { kw: string; acessos: number };
  const data: Row[] = [
    { kw: 'piso vinilico autocolante', acessos: 505 },
    { kw: 'grama sintetica', acessos: 143 },
    { kw: 'painel ripado', acessos: 86 },
  ];
  const columns = [
    { key: 'kw' as const, header: 'Palavra-chave', sortable: true },
    { key: 'acessos' as const, header: 'Acessos', numeric: true, sortable: true },
  ];

  const firstColumn = () => screen.getAllByRole('row').slice(1).map((row) => within(row).getAllByRole('cell')[0].textContent);

  it('ordena asc → desc → original', async () => {
    const onSortChange = vi.fn();
    render(() => h(DataTable<Row>, { columns, data, onSortChange }));
    const header = screen.getByRole('button', { name: /Acessos/ });
    await userEvent.click(header);
    expect(firstColumn()).toEqual(['painel ripado', 'grama sintetica', 'piso vinilico autocolante']);
    expect(header.closest('th')).toHaveAttribute('aria-sort', 'ascending');
    await userEvent.click(header);
    expect(firstColumn()).toEqual(['piso vinilico autocolante', 'grama sintetica', 'painel ripado']);
    await userEvent.click(header);
    expect(firstColumn()).toEqual(data.map((d) => d.kw));
    expect(onSortChange.mock.calls.map(([sort]) => sort)).toEqual([
      { key: 'acessos', direction: 'asc' },
      { key: 'acessos', direction: 'desc' },
      null,
    ]);
  });

  it('formata colunas numéricas em pt-BR', () => {
    render(() => h(DataTable<Row>, { columns, data: [{ kw: 'x', acessos: 12345 }] }));
    expect(screen.getByText('12.345')).toBeInTheDocument();
  });

  it('initialSort e v-model:sort controlado', async () => {
    const sort = ref<DataTableSort<Row> | null>({ key: 'kw', direction: 'asc' });
    render(() =>
      h(DataTable<Row>, {
        columns,
        data,
        sort: sort.value,
        'onUpdate:sort': (value: DataTableSort<Row> | null) => (sort.value = value),
      }),
    );
    expect(firstColumn()).toEqual(['grama sintetica', 'painel ripado', 'piso vinilico autocolante']);
    await userEvent.click(screen.getByRole('button', { name: /Palavra-chave/ }));
    expect(sort.value).toEqual({ key: 'kw', direction: 'desc' });
    expect(firstColumn()).toEqual(['piso vinilico autocolante', 'painel ripado', 'grama sintetica']);
  });

  it('controlado sem atualizar o pai mantém a ordem', async () => {
    const onUpdate = vi.fn();
    render(() => h(DataTable<Row>, { columns, data, sort: null, 'onUpdate:sort': onUpdate }));
    await userEvent.click(screen.getByRole('button', { name: /Acessos/ }));
    expect(onUpdate).toHaveBeenCalledWith({ key: 'acessos', direction: 'asc' });
    expect(firstColumn()).toEqual(data.map((d) => d.kw));
  });

  it('mostra estado vazio (padrão, prop e slot)', () => {
    const { unmount } = render(() => h(DataTable<Row>, { columns, data: [] }));
    expect(screen.getByText('Nenhum resultado')).toBeInTheDocument();
    unmount();
    render(() => h(DataTable<Row>, { columns, data: [], empty: 'Vazio (prop)' }, { empty: () => 'Vazio (slot)' }));
    expect(screen.getByText('Vazio (slot)')).toBeInTheDocument();
    expect(screen.queryByText('Vazio (prop)')).not.toBeInTheDocument();
  });

  it('pagina localmente', async () => {
    render(() => h(DataTable<Row>, { columns, data, pageSize: 2 }));
    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getByText(/1–2 de 3/)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: '2' }));
    expect(screen.getByText(/3–3 de 3/)).toBeInTheDocument();
    expect(firstColumn()).toEqual(['painel ripado']);
  });

  it('emite row-click no clique e no Enter', async () => {
    const onRowClick = vi.fn();
    render(() => h(DataTable<Row>, { columns, data, onRowClick }));
    const rows = screen.getAllByRole('row').slice(1);
    expect(rows[0]).toHaveAttribute('data-clickable');
    expect(rows[0]).toHaveAttribute('tabindex', '0');
    await userEvent.click(within(rows[1]).getByText('grama sintetica'));
    expect(onRowClick).toHaveBeenLastCalledWith(data[1], 1);
    rows[2].focus();
    await userEvent.keyboard('{Enter}');
    expect(onRowClick).toHaveBeenLastCalledWith(data[2], 2);
  });

  it('sem @row-click as linhas não são clicáveis', () => {
    render(() => h(DataTable<Row>, { columns, data }));
    expect(screen.getAllByRole('row')[1]).not.toHaveAttribute('data-clickable');
  });

  it('render, slot #cell-<id> (prioritário) e #header-<id>', () => {
    render(() =>
      h(
        DataTable<Row>,
        {
          columns: [
            { key: 'kw', header: 'Palavra-chave', render: (row: Row) => row.kw.toUpperCase() },
            { id: 'acoes', header: 'Ações', render: () => 'render' },
          ],
          data: data.slice(0, 1),
        },
        {
          'cell-acoes': ({ row, index }: { row: Row; index: number }) => h('button', `Editar ${row.kw} #${index}`),
          'header-acoes': () => h('em', 'Ações (slot)'),
        },
      ),
    );
    expect(screen.getByText('PISO VINILICO AUTOCOLANTE')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Editar piso vinilico autocolante #0' })).toBeInTheDocument();
    expect(screen.queryByText('render')).not.toBeInTheDocument();
    expect(screen.getByText('Ações (slot)').tagName).toBe('EM');
  });

  it('loading mostra skeletons', () => {
    const { container } = render(() => h(DataTable<Row>, { columns, data, loading: true, loadingRows: 3 }));
    expect(screen.getAllByRole('row')).toHaveLength(4);
    expect(container.querySelector('.wrapper')).not.toBeNull();
    expect(screen.queryByText('grama sintetica')).not.toBeInTheDocument();
  });
});
