import { defineComponent, h, nextTick } from 'vue';
import userEvent from '@testing-library/user-event';
import { TopNav } from '../src/components/TopNav';
import { render, screen, waitFor, within } from './render';

const links = [
  { label: 'Pedidos', href: '/pedidos', active: true },
  { label: 'Clientes', href: '/clientes' },
];

/** Stub de RouterLink: expõe as props recebidas como atributos. */
const FakeLink = defineComponent({
  props: { to: String },
  setup(props, { slots }) {
    return () => h('a', { 'data-to': props.to }, slots.default?.());
  },
});

describe('TopNav', () => {
  it('renderiza os links e marca o ativo com aria-current', () => {
    const { container } = render(() => h(TopNav, { links }));
    const nav = screen.getByRole('navigation', { name: 'Principal' });
    const active = within(nav).getByRole('link', { name: 'Pedidos' });
    expect(active).toHaveAttribute('href', '/pedidos');
    expect(active).toHaveAttribute('aria-current', 'page');
    expect(active).toHaveAttribute('data-active');
    expect(within(nav).getByRole('link', { name: 'Clientes' })).not.toHaveAttribute('aria-current');
    // marca padrão: JcLogo branco (barra navy) apontando para '/'
    const brand = container.querySelector('header a[href="/"]')!;
    expect(brand.querySelector('svg')).toHaveAttribute('data-variant', 'dark');
    expect(container.querySelector('[data-collapse]')).not.toBeNull();
  });

  it('link sem href vira botão e chama onClick', async () => {
    const onClick = vi.fn();
    render(() => h(TopNav, { links: [{ label: 'Sair', onClick }], collapseOnMobile: false }));
    await userEvent.click(screen.getByRole('button', { name: 'Sair' }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Sair' })).toHaveAttribute('type', 'button');
    expect(screen.queryByRole('button', { name: 'Abrir menu' })).toBeNull();
  });

  it('linkComponent recebe `to` e `href`', () => {
    const { container } = render(() => h(TopNav, { links, linkComponent: FakeLink }));
    const nav = screen.getByRole('navigation', { name: 'Principal' });
    const link = within(nav).getByText('Clientes');
    expect(link).toHaveAttribute('data-to', '/clientes');
    expect(link).toHaveAttribute('href', '/clientes');
    expect(container.querySelector('a[data-to="/"]')).not.toBeNull();
  });

  it('brandHref null renderiza a marca como span', () => {
    const { container } = render(() => h(TopNav, { brandHref: null, brand: 'JC Decor' }));
    const span = screen.getByText('JC Decor');
    expect(span.tagName).toBe('SPAN');
    expect(container.querySelector('header a')).toBeNull();
  });

  it('o hambúrguer abre e fecha os links mobile', async () => {
    // preventDefault: o jsdom não implementa navegação
    const spaLinks = links.map((l) => ({ ...l, onClick: (e: MouseEvent) => e.preventDefault() }));
    render(() => h(TopNav, { links: spaLinks }));
    expect(screen.queryByRole('navigation', { name: 'Principal (mobile)' })).toBeNull();
    const burger = screen.getByRole('button', { name: 'Abrir menu' });
    expect(burger).not.toHaveAttribute('data-opened');
    await userEvent.click(burger);
    await nextTick();
    expect(burger.querySelector('[data-opened]')).not.toBeNull();
    // Collapse anima a abertura (200ms); fechado, o conteúdo fica aria-hidden
    const mobile = await waitFor(() => screen.getByRole('navigation', { name: 'Principal (mobile)' }));
    // navegar pelo menu mobile fecha o menu
    await userEvent.click(within(mobile).getByRole('link', { name: 'Clientes' }));
    await nextTick();
    expect(burger.querySelector('[data-opened]')).toBeNull();
  });

  it('slots têm prioridade sobre as props brand/rightSection', () => {
    render(() =>
      h(
        TopNav,
        { brand: 'Marca prop', rightSection: 'Direita prop' },
        { brand: () => 'Marca slot', rightSection: () => h('button', 'Avatar') },
      ),
    );
    expect(screen.getByText('Marca slot')).toBeInTheDocument();
    expect(screen.queryByText('Marca prop')).toBeNull();
    expect(screen.getByRole('button', { name: 'Avatar' })).toBeInTheDocument();
    expect(screen.queryByText('Direita prop')).toBeNull();
  });

  it('props brand/rightSection aceitam texto ou função', () => {
    render(() => h(TopNav, { brand: () => h('strong', 'Painel'), rightSection: 'Olá' }));
    expect(screen.getByText('Painel').tagName).toBe('STRONG');
    expect(screen.getByText('Olá')).toBeInTheDocument();
  });

  it('Styles API: classNames, styles e theme.components.TopNav', () => {
    const { container } = render(() =>
      h(TopNav, { links, classNames: { link: 'meu-link', root: 'minha-raiz' }, styles: { brand: { opacity: 0.5 } } }),
    );
    expect(screen.getAllByRole('link', { name: 'Pedidos' })[0]).toHaveClass('meu-link');
    expect(container.querySelector('.minha-raiz')).toHaveAttribute('data-collapse');
    expect((container.querySelector('header a[href="/"]') as HTMLElement).style.opacity).toBe('0.5');
    expect(TopNav.classes.root).toBeTruthy();
  });
});
