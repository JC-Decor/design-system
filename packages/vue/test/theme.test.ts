import { h, nextTick } from 'vue';
import { Button, NumberInput, NumberFormatter, Table, Tag, Kicker, Headline, jcTheme, useMantineColorScheme, COLOR_SCHEME_STORAGE_KEY, JcProvider } from '../src';
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

describe('variante subtle sem cor = Ghost', () => {
  it('usa texto-2 em vez da cor primária', () => {
    render(() => h(Button, { variant: 'subtle' }, () => 'Ghost'));
    expect(screen.getByRole('button', { name: 'Ghost' }).style.getPropertyValue('--button-color')).toBe('var(--ds-text-2)');
  });
});
