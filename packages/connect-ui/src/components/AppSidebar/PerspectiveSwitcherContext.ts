import { createContext, useContext } from 'react';
import type { PerspectiveOption } from './AppSidebar.types';

export interface PerspectiveSwitcherValue {
  options: PerspectiveOption[];
  onSwitch: (key: string) => void;
}

/** Contexto opcional: quando presente, o `ConnectShell` mostra o seletor de perspectiva na sidebar. */
export const PerspectiveSwitcherContext = createContext<PerspectiveSwitcherValue | null>(null);

export function usePerspectiveSwitcher() {
  return useContext(PerspectiveSwitcherContext);
}
