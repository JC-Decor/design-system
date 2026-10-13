import { tones, type ToneName } from '../theme/tokens';

/** Garante um tom válido do Connect (valores desconhecidos caem no `fallback`). */
export function resolveTone(tone: string | undefined, fallback: ToneName = 'blue'): ToneName {
  return tone && tone in tones ? (tone as ToneName) : fallback;
}

/** Variáveis CSS do tom (trocam sozinhas no tema escuro): `--tone-bg`, `--tone-fg`, `--tone-soft`. */
export function toneStyle(tone: ToneName): Record<string, string> {
  return {
    '--tone-bg': `var(--cn-tone-${tone}-bg)`,
    '--tone-fg': `var(--cn-tone-${tone}-fg)`,
    '--tone-soft': `var(--cn-tone-${tone}-soft)`,
  };
}

