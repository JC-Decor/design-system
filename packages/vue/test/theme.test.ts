import { h, nextTick } from 'vue';
import { Autocomplete, Button, Drawer, Modal, MultiSelect, NativeSelect, NumberInput, NumberFormatter, RollingNumber, Select, Table, TagsInput, Timeline, TimelineItem, TreeSelect, Tag, Kicker, Headline, jcTheme, useMantineColorScheme, COLOR_SCHEME_STORAGE_KEY, JcProvider } from '../src';
import { render, screen } from './render';
import { render as tlRender } from '@testing-library/vue';
import { defineComponent } from 'vue';

describe('tema', () => {
  it('usa horizon como cor primária e Poppins', () => {
    expect(jcTheme.primaryColor).toBe('horizon');
    expect(jcTheme.fontFamily).toContain('Poppins');
    expect(jcTheme.colors!.horizon![6]).toBe('#2663EB');
    expect(jcTheme.colors!.electric![3]).toBe('#F7D759');
  });

  it('injeta as variáveis --ds-* via provider', () => {
    render(() => h(Button, null, () => 'Ok'));
    const css = Array.from(document.querySelectorAll('style')).map((s) => s.textContent).join('\n');
    expect(css).toContain('--ds-surface');
    expect(css).toContain('--dc-horizon: #2663EB');
    expect(css).toContain('--mantine-color-body: #F6F7FA');
  });
});

describe('Button', () => {
  it('variante accent usa Electric com texto Obsidian', () => {
    render(() => h(Button, { variant: 'accent' }, () => 'Destaque'));
    const root = screen.getByRole('button', { name: 'Destaque' });
    expect(root.style.getPropertyValue('--button-bg')).toBe('var(--mantine-color-electric-3)');
    expect(root.style.getPropertyValue('--button-color')).toBe('var(--mantine-color-obsidian-6)');
  });

  it('outline (secundário) usa hover primary-soft', () => {
    render(() => h(Button, { variant: 'outline' }, () => 'Secundária'));
    const root = screen.getByRole('button', { name: 'Secundária' });
    expect(root.style.getPropertyValue('--button-hover')).toBe('var(--ds-primary-soft)');
  });

  it('tamanho md tem 40px de altura (controles do DS)', () => {
    render(() => h(Button, null, () => 'Md'));
    expect(screen.getByRole('button', { name: 'Md' }).style.getPropertyValue('--button-height')).toBe('40px');
  });
});

describe('Tag', () => {
  it('mapeia tom para cores semânticas', () => {
    render(() => h(Tag, { tone: 'success' }, () => 'Sucesso'));
    const tag = screen.getByText('Sucesso').closest('[data-tone]') as HTMLElement;
    expect(tag.dataset.tone).toBe('success');
    expect(tag.style.getPropertyValue('--badge-color')).toBe('var(--ds-tag-success-color)');
  });

  it('withIcon renderiza o ícone do tom', () => {
    render(() => h(Tag, { tone: 'warn', withIcon: true }, () => 'Atenção'));
    const tag = screen.getByText('Atenção').closest('[data-tone]') as HTMLElement;
    expect(tag.querySelector('svg')).not.toBeNull();
  });
});

describe('Typography', () => {
  it('Headline usa a tag e a escala do tamanho', () => {
    render(() => h(Headline, { size: 'lg' }, () => 'Seção'));
    expect(screen.getByRole('heading', { level: 2, name: 'Seção' })).toBeInTheDocument();
  });

  it('Kicker aceita component e sobrepõe props', () => {
    render(() => h(Kicker, { component: 'span', c: 'red' }, () => 'Sobre'));
    expect(screen.getByText('Sobre').tagName).toBe('SPAN');
  });
});

describe('JcProvider', () => {
  it('lembra o esquema de cores no localStorage', async () => {
    window.localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, 'dark');
    let api: ReturnType<typeof useMantineColorScheme> | undefined;
    const Probe = defineComponent({
      setup() {
        api = useMantineColorScheme();
        return () => null;
      },
    });
    tlRender(defineComponent({ setup: () => () => h(JcProvider, { env: 'test' }, () => h(Probe)) }));
    expect(api!.colorScheme.value).toBe('dark');
    api!.setColorScheme('light');
    await nextTick();
    expect(window.localStorage.getItem(COLOR_SCHEME_STORAGE_KEY)).toBe('light');
    window.localStorage.removeItem(COLOR_SCHEME_STORAGE_KEY);
  });
});

describe('padrões do tema vencem os padrões fixos do Mantine Vue', () => {
  it('NumberInput usa size md (40px) do tema', () => {
    const { container } = render(() => h(NumberInput, { label: 'Largura' }));
    expect(container.querySelector('.mantine-NumberInput-wrapper')?.getAttribute('data-size')).toBe('md');
  });

  it('props do usuário continuam vencendo o tema', () => {
    const { container } = render(() => h(NumberInput, { label: 'Pequeno', size: 'xs' }));
    expect(container.querySelector('.mantine-NumberInput-wrapper')?.getAttribute('data-size')).toBe('xs');
  });

  it('NumberFormatter formata em pt-BR', () => {
    render(() => h(NumberFormatter, { value: 1234.5, thousandSeparator: '.' }));
    expect(screen.getByText('1.234,5')).toBeInTheDocument();
  });

  it('mantém estáticos como Table.Thead', () => {
    expect((Table as any).Thead).toBeDefined();
  });
});

describe('variante subtle sem cor', () => {
  it('fica na cor primária, como no @jcdecor/ui (o Mantine sempre envia a cor primária ao resolver)', () => {
    render(() => h(Button, { variant: 'subtle' }, () => 'Sutil'));
    expect(screen.getByRole('button', { name: 'Sutil' }).style.getPropertyValue('--button-color')).toBe('var(--mantine-color-horizon-light-color)');
  });
});

describe('correções de componentes do Mantine Vue 3.5', () => {
  it('Select não pesquisável tem input readonly nativo; pesquisável continua editável', () => {
    const { container } = render(() => [h(Select, { data: ['A', 'B'] }), h(Select, { data: ['A'], searchable: true })]);
    const [fixed, searchable] = container.querySelectorAll('input');
    expect(fixed.readOnly).toBe(true);
    expect(searchable.readOnly).toBe(false);
  });

  it('NativeSelect não controlado começa na primeira opção (não em branco)', () => {
    const { container } = render(() => [
      h(NativeSelect, { data: ['Um', 'Dois'] }),
      h(NativeSelect, { data: [{ value: 'x', label: 'X', disabled: true }, { value: 'y', label: 'Y' }] }),
      h(NativeSelect, { data: ['Um', 'Dois'], defaultValue: 'Dois' }),
    ]);
    expect([...container.querySelectorAll('select')].map((s) => s.value)).toEqual(['Um', 'y', 'Dois']);
  });
});

describe('mais correções do Mantine Vue 3.5', () => {
  it('NumberFormatter arredonda com decimalScale (como o React)', () => {
    render(() => h(NumberFormatter, { value: -3.45, decimalScale: 1, suffix: '%' }));
    expect(screen.getByText('-3,5%')).toBeInTheDocument();
  });

  it('RollingNumber mantém o separador de milhar do tema', () => {
    const { container } = render(() => h(RollingNumber, { value: 12480 }));
    expect(container.textContent?.replace(/\s/g, '')).toContain('12.480');
  });

  it('comboboxes usam size md do tema (o Mantine Vue cai em sm quando size não vem nos attrs)', () => {
    const { container } = render(() => [
      h(MultiSelect, { data: ['A'], label: 'M' }),
      h(MultiSelect, { data: ['A'], label: 'Pequeno', size: 'xs' }),
      h(TagsInput, { label: 'T' }),
      h(Autocomplete, { data: ['A'], label: 'A' }),
      h(TreeSelect, { data: [], label: 'Tr' }),
    ]);
    const [multi, multiXs] = container.querySelectorAll('.mantine-MultiSelect-wrapper');
    expect(multi?.getAttribute('data-size')).toBe('md');
    expect(multiXs?.getAttribute('data-size')).toBe('xs');
    expect(container.querySelector('.mantine-TagsInput-wrapper')?.getAttribute('data-size')).toBe('md');
    expect(container.querySelector('.mantine-Autocomplete-wrapper')?.getAttribute('data-size')).toBe('md');
    expect(container.querySelector('.mantine-TreeSelect-wrapper')?.getAttribute('data-size')).toBe('md');
  });

  it('Timeline conta itens gerados por v-for (Fragment) para o `active`', () => {
    const items = ['Pedido', 'Pago', 'Enviado'];
    const { container } = render(() =>
      h(Timeline, { active: 1 }, () => items.map((title) => h(TimelineItem, { key: title, title }))),
    );
    const active = [...container.querySelectorAll('.mantine-Timeline-item')].map((el) => el.hasAttribute('data-active'));
    expect(active).toEqual([true, true, false]);
  });
});

describe('Modal e Drawer', () => {
  const mountWith = (theme: object, ui: () => any) =>
    tlRender(defineComponent({ setup: () => () => h(JcProvider, { env: 'test', colorSchemeStorageKey: false, theme }, () => ui()) }));
  const styleOf = (selector: string) => document.body.querySelector<HTMLElement>(selector)?.getAttribute('style') ?? '';

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it.each([
    ['Modal', Modal],
    ['Drawer', Drawer],
  ] as const)('%s respeita theme.components.%s.defaultProps.zIndex (conteúdo e fundo)', async (name, Comp) => {
    mountWith({ components: { [name]: { defaultProps: { zIndex: 2500 } } } }, () =>
      h(Comp as any, { opened: true, title: 'Título', onClose() {} }, () => 'Corpo'),
    );
    await nextTick();
    expect(styleOf(`.mantine-${name}-root`)).toContain('--mb-z-index: 2500');
    expect(styleOf(`.mantine-${name}-overlay`)).toContain('--overlay-z-index: 2500');
  });

  it('a prop zIndex vence o tema', async () => {
    mountWith({ components: { Modal: { defaultProps: { zIndex: 2500 } } } }, () =>
      h(Modal, { opened: true, zIndex: 9000, title: 'Título', onClose() {} }, () => 'Corpo'),
    );
    await nextTick();
    expect(styleOf('.mantine-Modal-root')).toContain('--mb-z-index: 9000');
  });

  it('radius do tema (md) vira variável CSS válida, como no React', async () => {
    mountWith({}, () => h(Modal, { opened: true, title: 'Título', onClose() {} }, () => 'Corpo'));
    await nextTick();
    expect(styleOf('.mantine-Modal-root')).toContain('--modal-radius: var(--mantine-radius-md)');
  });
});
