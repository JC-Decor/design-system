import userEvent from '@testing-library/user-event';
import { Button, DataTable, KpiCard, PriceTag, Tag, PromoBanner, ProductCard, jcTheme, getDeltaTone, formatCurrency, formatPercent } from '../src';
import { render, screen, within } from './render';

describe('tema', () => {
  it('usa horizon como cor primária e Poppins', () => {
    expect(jcTheme.primaryColor).toBe('horizon');
    expect(jcTheme.fontFamily).toContain('Poppins');
    expect(jcTheme.colors!.horizon![6]).toBe('#2663EB');
    expect(jcTheme.colors!.electric![3]).toBe('#F7D759');
  });

  it('injeta as variáveis --ds-* via provider', () => {
    render(<Button>Ok</Button>);
    const css = Array.from(document.querySelectorAll('style')).map((s) => s.textContent).join('\n');
    expect(css).toContain('--ds-surface');
    expect(css).toContain('--dc-horizon: #2663EB');
    expect(css).toContain('--mantine-color-body: #F6F7FA');
  });
});

describe('Button', () => {
  it('variante accent usa Electric com texto Obsidian', () => {
    render(<Button variant="accent">Destaque</Button>);
    const root = screen.getByRole('button', { name: 'Destaque' });
    expect(root.style.getPropertyValue('--button-bg')).toBe('var(--mantine-color-electric-3)');
    expect(root.style.getPropertyValue('--button-color')).toBe('var(--mantine-color-obsidian-6)');
  });

  it('outline (secundário) usa hover primary-soft', () => {
    render(<Button variant="outline">Secundária</Button>);
    const root = screen.getByRole('button', { name: 'Secundária' });
    expect(root.style.getPropertyValue('--button-hover')).toBe('var(--ds-primary-soft)');
  });
});

describe('Tag', () => {
  it('mapeia tom para cores semânticas', () => {
    render(<Tag tone="success">Sucesso</Tag>);
    const tag = screen.getByText('Sucesso').closest('[data-tone]') as HTMLElement;
    expect(tag.dataset.tone).toBe('success');
    expect(tag.style.getPropertyValue('--badge-color')).toBe('var(--ds-tag-success-color)');
  });
});

describe('KpiCard', () => {
  it('formata número e colore variação negativa como erro', () => {
    render(<KpiCard label="Acessos" value={54959} delta={-5.6} />);
    expect(screen.getByText('54.959')).toBeInTheDocument();
    expect(screen.getByText('-5,6%')).toBeInTheDocument();
    const root = screen.getByText('Acessos').closest('[style]') as HTMLElement;
    expect(root.style.getPropertyValue('--kpi-delta-color')).toBe('var(--ds-error)');
  });

  it('getDeltaTone respeita invertDelta', () => {
    expect(getDeltaTone(3)).toBe('up');
    expect(getDeltaTone(-3)).toBe('down');
    expect(getDeltaTone(-3, true)).toBe('up');
    expect(getDeltaTone(0)).toBe('flat');
  });
});

describe('formatação pt-BR', () => {
  it('formata moeda e percentual', () => {
    expect(formatCurrency(1234.5).replace(/\s/g, ' ')).toBe('R$ 1.234,50');
    expect(formatPercent(5.6, { signed: true })).toBe('+5,6%');
  });

  it('PriceTag mostra parcelamento e Pix', () => {
    render(<PriceTag value={100} oldValue={150} installments={{ count: 10 }} pixDiscount={5} />);
    expect(screen.getByText(/10x de R\$\s10,00 sem juros/)).toBeInTheDocument();
    expect(screen.getByText(/R\$\s95,00 no Pix/)).toBeInTheDocument();
    expect(screen.getByText(/R\$\s150,00/)).toBeInTheDocument();
  });

  it('ProductCard calcula selo de desconto', () => {
    render(<ProductCard name="Piso vinílico" image="x.jpg" price={80} oldPrice={100} />);
    expect(screen.getByText('-20%')).toBeInTheDocument();
  });
});

describe('PromoBanner', () => {
  it('renderiza destaque e fecha', async () => {
    const onClose = vi.fn();
    render(
      <PromoBanner highlight="JCMAIO" withCloseButton onClose={onClose}>
        5% OFF na 1ª compra cupom:
      </PromoBanner>,
    );
    expect(screen.getByText('JCMAIO').tagName).toBe('STRONG');
    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }));
    expect(onClose).toHaveBeenCalled();
    expect(screen.queryByText('JCMAIO')).not.toBeInTheDocument();
  });
});

describe('DataTable', () => {
  const data = [
    { kw: 'piso vinilico autocolante', acessos: 505 },
    { kw: 'grama sintetica', acessos: 143 },
    { kw: 'painel ripado', acessos: 86 },
  ];
  const columns = [
    { key: 'kw' as const, header: 'Palavra-chave', sortable: true },
    { key: 'acessos' as const, header: 'Acessos', numeric: true, sortable: true },
  ];

  const firstColumn = () =>
    screen.getAllByRole('row').slice(1).map((row) => within(row).getAllByRole('cell')[0].textContent);

  it('ordena asc → desc → original', async () => {
    render(<DataTable columns={columns} data={data} />);
    const header = screen.getByRole('button', { name: /Acessos/ });
    await userEvent.click(header);
    expect(firstColumn()).toEqual(['painel ripado', 'grama sintetica', 'piso vinilico autocolante']);
    await userEvent.click(header);
    expect(firstColumn()).toEqual(['piso vinilico autocolante', 'grama sintetica', 'painel ripado']);
    await userEvent.click(header);
    expect(firstColumn()).toEqual(data.map((d) => d.kw));
  });

  it('mostra estado vazio', () => {
    render(<DataTable columns={columns} data={[]} />);
    expect(screen.getByText('Nenhum resultado')).toBeInTheDocument();
  });

  it('pagina localmente', () => {
    render(<DataTable columns={columns} data={data} pageSize={2} />);
    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getByText(/1–2 de 3/)).toBeInTheDocument();
  });
});
