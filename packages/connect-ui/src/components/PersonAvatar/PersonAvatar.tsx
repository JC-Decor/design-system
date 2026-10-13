import { Avatar, Box, type AvatarProps, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { resolveTone, toneStyle } from '../../utils/tone';
import { useAvatarSrc } from '../../utils/avatar';
import classes from './PersonAvatar.module.css';

export interface PersonAvatarProps extends Omit<AvatarProps, 'size' | 'color' | 'variant' | 'children'>, Omit<ElementProps<'div'>, 'color'> {
  /** Diâmetro em px @default 36 */
  size?: number;
  /** Iniciais exibidas quando não há foto (ex.: "AS") @default 'A' */
  seed?: string;
  /** Tom do gradiente das iniciais @default 'blue' */
  tone?: ToneName;
  /** Anel em volta: `true` = anel duplo (superfície + navy suave), `'sm'` = anel fino da superfície (pilhas) */
  ring?: boolean | 'sm';
  /** Foto; se falhar ao carregar, volta para as iniciais */
  src?: string | null;
  /** Texto alternativo da foto @default seed */
  alt?: string;
}

/** Avatar do Connect: iniciais sobre gradiente do tom (ou foto), com anel opcional. Avatar do Mantine por baixo. */
export function PersonAvatar({ size = 36, seed = 'A', tone = 'blue', ring = false, src, alt, className, style, ...others }: PersonAvatarProps) {
  const t = resolveTone(tone);
  const resolvedSrc = useAvatarSrc(src);
  return (
    <Avatar
      src={resolvedSrc}
      alt={alt ?? seed}
      size={size}
      radius="xl"
      className={clsx(classes.root, className)}
      classNames={{ placeholder: classes.placeholder }}
      data-ring={ring === true ? 'lg' : ring === 'sm' ? 'sm' : undefined}
      data-tone={t}
      style={[{ ...toneStyle(t), '--pa-fz': `${Math.max(10, size * 0.36)}px` }, style]}
      {...others}
    >
      {seed}
    </Avatar>
  );
}
PersonAvatar.displayName = '@jcdecor/connect-ui/PersonAvatar';

export interface AvatarStackPerson {
  seed: string;
  tone?: ToneName;
  src?: string;
  /** Nome completo (vira o texto alternativo/tooltip nativo) */
  name?: string;
}

export interface AvatarStackProps extends BoxProps, ElementProps<'div'> {
  people: AvatarStackPerson[];
  /** Diâmetro de cada avatar @default 28 */
  size?: number;
  /** Quantos mostrar antes do "+N" @default 5 */
  max?: number;
}

/** Pilha de avatares sobrepostos com contador "+N" para o excedente (antigo AvatarGroup). */
export function AvatarStack({ people, size = 28, max = 5, className, ...others }: AvatarStackProps) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return (
    <Box className={clsx(classes.stack, className)} role="group" aria-label={`${people.length} pessoas`} {...others}>
      {shown.map((p, i) => (
        <PersonAvatar key={`${p.seed}-${i}`} size={size} seed={p.seed} tone={p.tone ?? 'blue'} src={p.src} alt={p.name} title={p.name} ring="sm" />
      ))}
      {extra > 0 && (
        <Box
          className={classes.extra}
          style={{ width: size, height: size, fontSize: size * 0.32 }}
          aria-label={`mais ${extra} ${extra === 1 ? 'pessoa' : 'pessoas'}`}
        >
          +{extra}
        </Box>
      )}
    </Box>
  );
}
AvatarStack.displayName = '@jcdecor/connect-ui/AvatarStack';
