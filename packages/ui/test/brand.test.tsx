import { Collaborator, GreekFrame, JcLogo, JcLogoAlt, SpartanHelmet } from '../src';
import { render, screen } from './render';

const fills = (el: Element) => [...el.querySelectorAll('path')].map((p) => p.getAttribute('fill'));

describe('JcLogo', () => {
  it('auto usa variáveis que mudam com o tema e tem título acessível', () => {
    render(<JcLogo />);
    const svg = screen.getByRole('img', { name: 'JC Decor' });
    expect(fills(svg)).toContain('var(--jc-logo-shield)');
    expect(svg.querySelector('g[fill="var(--jc-logo-wordmark)"]')).not.toBeNull();
  });

  it('variant light/dark fixam as cores para o fundo', () => {
    const { container } = render(
      <>
        <JcLogo variant="light" data-testid="l" />
        <JcLogo variant="dark" data-testid="d" />
      </>,
    );
    expect(fills(container.querySelector('[data-testid="l"]')!)[0]).toBe('#0E36E3');
    expect(fills(container.querySelector('[data-testid="d"]')!)[0]).toBe('#FFFFFF');
  });

  it('recolore por parte e resolve cores do tema', () => {
    render(<JcLogo shieldColor="electric.3" lettersColor="#ff0000" wordmarkColor="horizon" title="logo" />);
    const svg = screen.getByRole('img', { name: 'logo' });
    const f = fills(svg);
    expect(f[0]).toBe('var(--mantine-color-electric-3)');
    expect(f[1]).toBe('#ff0000');
    expect(svg.querySelectorAll('g')[1].getAttribute('fill')).toMatch(/horizon/);
  });

  it('type mark/wordmark recorta o viewBox e omite partes', () => {
    const { container } = render(
      <>
        <JcLogo type="mark" data-testid="m" />
        <JcLogo type="wordmark" data-testid="w" />
      </>,
    );
    const m = container.querySelector('[data-testid="m"]')!;
    const w = container.querySelector('[data-testid="w"]')!;
    expect(m.querySelectorAll('path')).toHaveLength(9);
    expect(w.querySelectorAll('path')).toHaveLength(5);
    expect(m.getAttribute('viewBox')).not.toBe(w.getAttribute('viewBox'));
  });
});

describe('ilustrações', () => {
  it('JcLogoAlt preenche letras só quando lettersColor é passado', () => {
    const { container, rerender } = render(<JcLogoAlt data-testid="a" />);
    expect(container.querySelectorAll('path')).toHaveLength(1);
    rerender(<JcLogoAlt lettersColor="white" strokeColor="none" />);
    expect(document.querySelectorAll('path')).toHaveLength(2);
    expect(document.querySelectorAll('path')[1].getAttribute('stroke')).toBe('none');
  });

  it('SpartanHelmet tem 3 camadas recoloríveis e é decorativo sem título', () => {
    const { container } = render(<SpartanHelmet crestColor="danger" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    expect(fills(svg)[1]).toMatch(/danger/);
    expect(fills(svg)[0]).toBe('var(--jc-art-paper)');
  });

  it('GreekFrame centraliza o conteúdo', () => {
    render(<GreekFrame size={120}><span>JC</span></GreekFrame>);
    expect(screen.getByText('JC')).toBeInTheDocument();
  });

  it('Collaborator usa currentColor e aceita cor do boné', () => {
    const { container } = render(<Collaborator headColor="electric.3" />);
    const f = fills(container.querySelector('svg')!);
    expect(f[0]).toMatch(/electric/);
    expect(f[1]).toBe('currentColor');
  });
});
