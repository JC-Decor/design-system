import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import { useIllustrationUrl, type IllustrationSource } from './catalog';
import classes from './Illustration.module.css';

export type IllustrationSize = 'sm' | 'md' | 'lg' | 'xl';
export type IllustrationTone = 'default' | 'muted' | 'soft' | 'strong';

export interface IllustrationProps extends BoxProps, Omit<ElementProps<'img'>, 'src' | 'alt'> {
  /** Nome do catálogo (ex.: `'dayOff'`, `'meet-the-team'`) ou URL própria */
  src?: IllustrationSource;
  /** Alias de `src` com o nome do catálogo (API do connect-jc: `<Illustration name="news" />`) */
  name?: IllustrationSource;
  /** Texto alternativo; vazio = decorativa @default '' */
  alt?: string;
  /** Largura máxima: sm 96 · md 160 · lg 240 · xl 360 px @default 'md' */
  size?: IllustrationSize;
  /** Intensidade: muted (apagada) · soft · default · strong (mais saturada) @default 'default' */
  tone?: IllustrationTone;
}

/** Ilustração responsiva com tamanhos e intensidades do Connect. Carrega sob demanda (`loading="lazy"`). */
export function Illustration({ src, name, alt = '', size = 'md', tone = 'default', className, ...others }: IllustrationProps) {
  const url = useIllustrationUrl(src ?? name);
  if (!url) return null;
  return (
    <Box
      component="img"
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={clsx(classes.illustration, className)}
      data-size={size}
      data-tone={tone}
      {...others}
    />
  );
}
Illustration.displayName = '@jcdecor/connect-ui/Illustration';

export interface IllustrationStripProps extends BoxProps, ElementProps<'section', 'title'> {
  /** Ilustração à direita: nome do catálogo ou URL */
  src: IllustrationSource;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  desc?: React.ReactNode;
  /** Versão destaque: mais alta, título 22px e arte maior */
  featured?: boolean;
}

/** Faixa de destaque com texto à esquerda e ilustração à direita (`.illustration-strip`). */
export function IllustrationStrip({ src, eyebrow, title, desc, featured, className, ...others }: IllustrationStripProps) {
  const url = useIllustrationUrl(src);
  return (
    <Box component="section" className={clsx(classes.strip, className)} data-featured={featured || undefined} {...others}>
      <div className={classes.stripCopy}>
        {eyebrow && <span className={classes.stripEyebrow}>{eyebrow}</span>}
        <h3 className={classes.stripTitle}>{title}</h3>
        {desc && <p className={classes.stripDesc}>{desc}</p>}
      </div>
      <img src={url} alt="" loading="lazy" decoding="async" className={classes.stripArt} />
    </Box>
  );
}
IllustrationStrip.displayName = '@jcdecor/connect-ui/IllustrationStrip';
