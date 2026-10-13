/**
 * O DS Connect é só React. Este módulo mantém a mesma API do docs do JC Decor (que alterna React × Vue)
 * para que páginas copiadas de lá continuem compilando; tudo aqui é fixo em React.
 */
export type Framework = 'react';

export const useFramework = () => ({ framework: 'react' as Framework, setFramework: (_f: Framework) => {} });

/** Conteúdo específico de framework: só `framework="react"` é exibido. */
export function OnlyFor({ framework, children }: { framework: 'react' | 'vue'; children: React.ReactNode }) {
  return framework === 'react' ? <>{children}</> : null;
}
