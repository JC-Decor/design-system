import { h } from 'vue';
import userEvent from '@testing-library/user-event';
import { PageHeader, TopNav } from '../src';
import { render, screen } from './render';

describe('PageHeader (ícone e Styles API)', () => {
  it('renderiza ícone (prop ou slot #icon), kicker, título, descrição e ações', () => {
    render(() =>
      h(
        PageHeader,
        { kicker: 'Plataforma', title: 'Serviços', description: 'Apps de IA disponíveis' },
        { icon: () => h('svg', { 'data-testid': 'icone' }), actions: () => h('button', 'Atualizar') },
      ),
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Serviços' })).toBeInTheDocument();
    expect(screen.getByText('Plataforma')).toBeInTheDocument();
    expect(screen.getByText('Apps de IA disponíveis')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Atualizar' })).toBeInTheDocument();
    expect(screen.getByTestId('icone').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('aceita classNames, styles e iconSize', () => {
    render(() =>
      h(PageHeader, {
        title: 'Título',
        icon: () => h('svg', { 'data-testid': 'icone' }),
        iconSize: 64,
        classNames: { icon: 'meu-icone', title: 'meu-titulo' },
        styles: { root: { marginBottom: '4px' } },
        'data-testid': 'raiz',
      }),
    );
    expect(screen.getByTestId('icone').parentElement).toHaveClass('meu-icone');
    expect(screen.getByRole('heading', { name: 'Título' })).toHaveClass('meu-titulo');
    const root = screen.getByTestId('raiz');
    expect(root.style.marginBottom).toBe('4px');
    expect(root.style.getPropertyValue('--page-header-icon-size')).toContain('4rem');
  });

  it('sem ícone não renderiza o quadro', () => {
    render(() => h(PageHeader, { title: 'Só título', classNames: { icon: 'quadro' } }));
    expect(document.querySelector('.quadro')).toBeNull();
  });
});

describe('TopNav (seções nos links)', () => {
  it('leftSection/rightSection, só ícone com aria-label e desabilitado', async () => {
    const onClick = vi.fn();
    const onDisabled = vi.fn();
    render(() =>
      h(TopNav, {
        collapseOnMobile: false,
        links: [
          { label: 'Início', href: '/', active: true, leftSection: () => h('svg', { 'data-testid': 'home' }) },
          { label: 'Pedidos', onClick, rightSection: () => h('span', '3') },
          { label: '', 'aria-label': 'Configurações', onClick, leftSection: () => h('svg', { 'data-testid': 'cfg' }) },
          { label: 'Relatórios', disabled: true, href: '/relatorios', onClick: onDisabled },
        ],
      }),
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
});
