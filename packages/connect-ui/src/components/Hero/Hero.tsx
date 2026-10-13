import { useId } from 'react';
import { Box, Button, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { Icon } from '../Icon';
import { Illustration, type IllustrationSource } from '../Illustration';
import { PersonAvatar } from '../PersonAvatar';
import classes from './Hero.module.css';

export interface HeroArtPerson {
  seed: string;
  tone: ToneName;
  src?: string;
  name?: string;
}

export interface HeroArtTag {
  label: string;
  tone: ToneName;
}

export interface HeroArtProps extends BoxProps, ElementProps<'div'> {
  /** Até 5 avatares flutuando (posições fixas) */
  people?: HeroArtPerson[];
  /** Até 2 etiquetas flutuantes (canto superior esquerdo e inferior direito) */
  tags?: HeroArtTag[];
}

const DEFAULT_PEOPLE: HeroArtPerson[] = [
  { seed: 'A', tone: 'blue' },
  { seed: 'R', tone: 'lavender' },
  { seed: 'M', tone: 'green' },
  { seed: 'J', tone: 'coral' },
  { seed: 'S', tone: 'yellow' },
];
const DEFAULT_TAGS: HeroArtTag[] = [
  { label: 'Onboarding ativo', tone: 'green' },
  { label: '5 entrevistas hoje', tone: 'lavender' },
];
const SIZES = [62, 84, 58, 48, 42];

/** Arte padrão do Hero (HERO ART do Connect): manchas em gradiente, avatares e etiquetas flutuando. Decorativa. */
export function HeroArt({ people = DEFAULT_PEOPLE, tags = DEFAULT_TAGS, className, ...others }: HeroArtProps) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  return (
    <Box className={clsx(classes.art, className)} aria-hidden {...others}>
      <svg className={classes.artBg} viewBox="0 0 460 320" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`${id}-b1`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--cn-tone-lavender-bg)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--cn-tone-blue-bg)' }} />
          </linearGradient>
          <linearGradient id={`${id}-b2`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--cn-tone-yellow-bg)', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: 'var(--cn-tone-coral-bg)', stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>
        <path d="M40 90 C 20 30, 140 -10, 230 30 C 320 70, 440 40, 440 150 C 440 280, 290 320, 200 300 C 60 270, 60 150, 40 90 Z" fill={`url(#${id}-b1)`} opacity=".78" />
        <path d="M260 60 C 320 30, 410 70, 400 150 C 390 230, 310 230, 280 180 C 250 130, 220 90, 260 60 Z" fill={`url(#${id}-b2)`} opacity=".65" />
        {Array.from({ length: 7 }, (_, i) => (
          <circle key={i} cx={360 + (i % 4) * 14} cy={40 + Math.floor(i / 4) * 14} r="2" className={classes.artDot} />
        ))}
        <circle cx="60" cy="270" r="8" className={classes.artBubble} opacity=".85" />
        <circle cx="420" cy="260" r="14" className={classes.artBubble} opacity=".75" />
        <path d="M30 60 q 14 -24 32 -10 q -8 22 -32 10 Z" style={{ fill: 'var(--cn-tone-green-bg)' }} opacity=".95" />
        <path d="M420 30 q 14 -8 22 8 q -16 18 -22 -8 Z" style={{ fill: 'var(--cn-tone-lavender-bg)' }} opacity=".95" />
        <path d="M395 280 q 18 4 14 22 q -20 6 -14 -22 Z" style={{ fill: 'var(--cn-tone-green-bg)' }} opacity=".75" />
      </svg>
      <div className={classes.people}>
        {people.slice(0, 5).map((p, i) => (
          <div key={`${p.seed}-${i}`} className={classes.person} data-slot={i + 1}>
            <PersonAvatar size={SIZES[i]} seed={p.seed} tone={p.tone} src={p.src} alt={p.name} ring />
          </div>
        ))}
      </div>
      {tags.slice(0, 2).map((tag, i) => (
        <div key={tag.label} className={classes.tag} data-slot={i + 1}>
          <span className={classes.tagDot} style={{ background: `var(--cn-tone-${tag.tone}-fg)` }} />
          {tag.label}
        </div>
      ))}
    </Box>
  );
}
HeroArt.displayName = '@jcdecor/connect-ui/HeroArt';

export interface HeroProps extends BoxProps, ElementProps<'section', 'title'> {
  /** Cor do botão principal (ex.: cor da área); padrão = primária */
  primary?: string;
  /** Selo com ✦ acima do título */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** Texto do botão principal (com chevron) */
  ctaPrimary?: string;
  onCtaPrimary?: () => void;
  /** Texto do botão secundário (ghost) */
  ctaSecondary?: string;
  onCtaSecondary?: () => void;
  /** Rodapé tracejado com estatísticas (ex.: <AvatarStack/> + "12 aniversariantes") */
  footMeta?: React.ReactNode;
  /** Mais baixo: título 30px e arte menor */
  compact?: boolean;
  /** URL de ilustração no lugar do HeroArt */
  illustration?: IllustrationSource;
  illustrationAlt?: string;
  /** Arte própria à direita (vence `illustration`) */
  art?: React.ReactNode;
}

/** Hero do painel do Connect: saudação, subtítulo, CTAs e meta à esquerda; arte animada ou ilustração à direita. */
export function Hero({
  primary,
  eyebrow,
  title,
  sub,
  ctaPrimary,
  onCtaPrimary,
  ctaSecondary,
  onCtaSecondary,
  footMeta,
  compact,
  illustration,
  illustrationAlt = '',
  art,
  className,
  ...others
}: HeroProps) {
  return (
    <Box component="section" className={clsx(classes.hero, className)} data-compact={compact || undefined} {...others}>
      <div className={classes.bg} />
      <div className={classes.left}>
        {eyebrow && (
          <span className={classes.eyebrow}>
            <Icon name="sparkle" size={13} /> {eyebrow}
          </span>
        )}
        <h2 className={classes.title}>{title}</h2>
        {sub && <p className={classes.sub}>{sub}</p>}
        {(ctaPrimary || ctaSecondary) && (
          <div className={classes.cta}>
            {ctaPrimary && (
              <Button rightSection={<Icon name="chev-r" size={16} />} onClick={onCtaPrimary} color={primary}>
                {ctaPrimary}
              </Button>
            )}
            {ctaSecondary && (
              <Button variant="ghost" onClick={onCtaSecondary}>
                {ctaSecondary}
              </Button>
            )}
          </div>
        )}
        {footMeta && (
          <div className={classes.meta}>
            <div className={classes.metaRow}>{footMeta}</div>
          </div>
        )}
      </div>
      <div className={classes.right}>
        {art ??
          (illustration ? (
            <div className={classes.illustrationWrap}>
              <Illustration src={illustration} alt={illustrationAlt} size="xl" className={classes.illustration} />
            </div>
          ) : (
            <HeroArt />
          ))}
      </div>
    </Box>
  );
}
Hero.displayName = '@jcdecor/connect-ui/Hero';
