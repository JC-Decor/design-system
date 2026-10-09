import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type Framework = 'react' | 'vue';

const STORAGE_KEY = 'jc-docs-framework';

function initialFramework(): Framework {
  // ?fw=vue / ?fw=react no link tem prioridade (para compartilhar), depois a última escolha
  const fromUrl = new URLSearchParams(window.location.search).get('fw');
  if (fromUrl === 'vue' || fromUrl === 'react') return fromUrl;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'vue' ? 'vue' : 'react';
  } catch {
    return 'react';
  }
}

const FrameworkContext = createContext<{ framework: Framework; setFramework: (f: Framework) => void }>({
  framework: 'react',
  setFramework: () => {},
});

/** Escolha global React × Vue: troca exemplos, código, imports e playgrounds de todas as páginas. */
export function FrameworkProvider({ children }: { children: React.ReactNode }) {
  const [framework, setState] = useState<Framework>(initialFramework);
  const setFramework = useCallback((f: Framework) => {
    setState(f);
    try {
      window.localStorage.setItem(STORAGE_KEY, f);
    } catch {
      // sem localStorage: vale só nesta aba
    }
  }, []);
  useEffect(() => {
    document.documentElement.dataset.framework = framework;
  }, [framework]);
  return <FrameworkContext.Provider value={{ framework, setFramework }}>{children}</FrameworkContext.Provider>;
}

export const useFramework = () => useContext(FrameworkContext);

/** `@jcdecor/ui/chat` → `@jcdecor/vue/chat` etc. */
export const toVueImport = (code: string) => code.replace(/@jcdecor\/ui/g, '@jcdecor/vue').replace(/@tabler\/icons-react/g, '@tabler/icons-vue');

/**
 * Conteúdo só para um framework: `<OnlyFor framework="vue">Use <code>v-model:sort</code>…</OnlyFor>`.
 * Use para diferenças de API (eventos, slots, v-model); texto comum fica fora.
 */
export function OnlyFor({ framework, children }: { framework: Framework; children: React.ReactNode }) {
  const current = useFramework().framework;
  return current === framework ? <>{children}</> : null;
}
