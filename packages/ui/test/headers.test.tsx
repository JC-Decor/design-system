import userEvent from '@testing-library/user-event';
import { PageHeader, TopNav } from '../src';
import { render, screen, waitFor, within } from './render';

describe('PageHeader', () => {
  it('renderiza ícone, kicker, título, descrição e ações', () => {
    render(
      <PageHeader
        icon={<svg data-testid="icone" />}
        kicker="Plataforma"
        title="Serviços"
        description="Apps de IA disponíveis"
        actions={<button type="button">Atualizar</button>}
      />,
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Serviços' })).toBeInTheDocument();
    expect(screen.getByText('Plataforma')).toBeInTheDocument();
    expect(screen.getByText('Apps de IA disponíveis')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Atualizar' })).toBeInTheDocument();
    const icon = screen.getByTestId('icone').parentElement!;
    expect(icon).toHaveAttribute('aria-hidden');
  });

  it('aceita Styles API (classNames, styles) e iconSize', () => {
    render(
      <PageHeader
        title="Título"
        icon={<svg data-testid="icone" />}
        iconSize={64}
        classNames={{ icon: 'meu-icone', title: 'meu-titulo' }}
        styles={{ root: { marginBottom: 4 } }}
        data-testid="raiz"
      />,
    );
    expect(screen.getByTestId('icone').parentElement).toHaveClass('meu-icone');
    expect(screen.getByRole('heading', { name: 'Título' })).toHaveClass('meu-titulo');
    const root = screen.getByTestId('raiz');
    expect(root.style.marginBottom).toBe('4px');
    expect(root.style.getPropertyValue('--page-header-icon-size')).toContain('4rem');
  });

  it('sem ícone não renderiza o quadro', () => {
    render(<PageHeader title="Só título" classNames={{ icon: 'quadro' }} />);
    expect(document.querySelector('.quadro')).toBeNull();
  });
});

describe('TopNav', () => {
  it('links com leftSection/rightSection, só ícone com aria-label e desabilitado', async () => {
    const onClick = vi.fn();
    const onDisabled = vi.fn();
    render(
      <TopNav
        collapseOnMobile={false}
        links={[
          { label: 'Início', href: '/', active: true, leftSection: <svg data-testid="home" /> },
          { label: 'Pedidos', onClick, rightSection: <span>3</span> },
          { label: '', 'aria-label': 'Configurações', onClick, leftSection: <svg data-testid="cfg" /> },
          { label: 'Relatórios', disabled: true, href: '/relatorios', onClick: onDisabled },
        ]}
      />,
    );
    expect(screen.getByRole('link', { name: 'Início' })).toContainElement(screen.getByTestId('home'));
    expect(screen.getByRole('link', { name: 'Início' })).toHaveAttribute('aria-current', 'page');
    await userEvent.click(screen.getByRole('button', { name: 'Pedidos 3' }));
    await userEvent.click(screen.getByRole('button', { name: 'Configurações' }));
    expect(onClick).toHaveBeenCalledTimes(2);
    const disabled = screen.getByRole('button', { name: 'Relatórios' });
    expect(disabled).toBeDisabled();
    expect(disabled).not.toHaveAttribute('href');
    await userEvent.click(disabled);
    expect(onDisabled).not.toHaveBeenCalled();
  });

  it('hambúrguer expõe aria-expanded/aria-controls e Esc fecha o menu devolvendo o foco', async () => {
    render(
      <>
        <TopNav links={[{ label: 'Pedidos', href: '/pedidos' }]} />
        <button type="button">Fora</button>
      </>,
    );
    const burger = screen.getByRole('button', { name: 'Abrir menu' });
    expect(burger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(burger);
    expect(burger).toHaveAttribute('aria-expanded', 'true');
    const mobile = document.getElementById(burger.getAttribute('aria-controls')!);
    expect(mobile).toHaveAttribute('aria-label', 'Principal (mobile)');

    // foco dentro do menu: Esc fecha e devolve o foco ao hambúrguer
    (await waitFor(() => within(mobile!).getByRole('link', { name: 'Pedidos' }))).focus();
    await userEvent.keyboard('{Escape}');
    expect(burger).toHaveAttribute('aria-expanded', 'false');
    expect(burger).toHaveFocus();

    // foco fora da barra: Esc fecha sem roubar o foco
    await userEvent.click(burger);
    screen.getByRole('button', { name: 'Fora' }).focus();
    await userEvent.keyboard('{Escape}');
    expect(burger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: 'Fora' })).toHaveFocus();
  });
});
