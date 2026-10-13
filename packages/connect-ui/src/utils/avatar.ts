import { useMantineTheme } from '@mantine/core';

/** Resolve a URL da foto pelo `theme.other.resolveAvatarSrc` (ex.: proxy de mídia do app); sem ele, usa a URL como veio. */
export function useAvatarSrc(src: string | null | undefined): string | null {
  const theme = useMantineTheme();
  const resolver = theme.other.resolveAvatarSrc as ((src: string | null | undefined) => string | null | undefined) | undefined;
  return (resolver ? resolver(src) : src) || null;
}
