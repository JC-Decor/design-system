import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ConnectProvider, EmptyStatePanel, Illustration, ILLUSTRATION_FILES, illustrationNames, illustrationUrl } from '../src';
import { render, screen } from './render';
import { render as rtlRender } from '@testing-library/react';

const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf8'));

describe('catálogo de ilustrações', () => {
  it('todo nome aponta para um SVG que existe no pacote', () => {
    for (const file of new Set(Object.values(ILLUSTRATION_FILES))) {
      expect(existsSync(resolve(__dirname, '../illustrations', file))).toBe(true);
    }
  });

  it('nomes canônicos não incluem os aliases kebab-case', () => {
    expect(illustrationNames).toContain('dayOff');
    expect(illustrationNames).not.toContain('a-day-off');
  });

  it('resolve nome para o CDN da versão atual e deixa URLs próprias como estão', () => {
    expect(illustrationUrl('dayOff')).toBe(`https://cdn.jsdelivr.net/npm/@jcdecor/connect-ui@${pkg.version}/illustrations/a-day-off.svg`);
    expect(illustrationUrl('/arte/minha.svg')).toBe('/arte/minha.svg');
  });
});

describe('Illustration', () => {
  it('aceita `name` (API do connect-jc) e resolve a URL', () => {
    const { container } = render(<Illustration name="news" />);
    expect(container.querySelector('img')!.getAttribute('src')).toMatch(/\/illustrations\/news\.svg$/);
  });

  it('usa theme.other.illustrationBaseUrl quando definido', () => {
    const { container } = rtlRender(
      <ConnectProvider env="test" theme={{ other: { illustrationBaseUrl: '/static/ilustracoes' } }}>
        <Illustration src="meetTeam" />
      </ConnectProvider>,
    );
    expect(container.querySelector('img')!.getAttribute('src')).toBe('/static/ilustracoes/meet-the-team.svg');
  });
});

describe('EmptyStatePanel com ilustrações', () => {
  it('variante usa a arte padrão da variante', () => {
    const { container } = render(<EmptyStatePanel variant="error" />);
    expect(container.querySelector('img')!.getAttribute('src')).toMatch(/page-not-found\.svg$/);
    expect(screen.getByText('Algo deu errado')).toBeInTheDocument();
  });

  it('módulo usa a arte do módulo', () => {
    const { container } = render(<EmptyStatePanel module="documents" title="Nenhum documento" />);
    expect(container.querySelector('img')!.getAttribute('src')).toMatch(/markdown-file\.svg$/);
  });

  it('illustration={false} mantém o layout simples com ícone', () => {
    const { container } = render(<EmptyStatePanel variant="empty" illustration={false} />);
    expect(container.querySelector('img')).toBeNull();
    expect(screen.getByText('Nenhum item encontrado')).toBeInTheDocument();
  });
});
