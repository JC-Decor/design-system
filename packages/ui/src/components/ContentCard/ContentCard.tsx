import {
  Card,
  factory,
  useProps,
  useStyles,
  type CardProps,
  type Factory,
  type StylesApiProps,
} from '@mantine/core';
import { Kicker } from '../Typography';
import classes from './ContentCard.module.css';

export type ContentCardStylesNames = 'root' | 'image' | 'kicker' | 'title' | 'body' | 'actions';

export interface ContentCardProps extends Omit<CardProps, 'classNames' | 'styles' | 'vars' | 'attributes' | 'title'>, StylesApiProps<ContentCardFactory> {
  /** Sobretítulo em caixa-alta */
  kicker?: React.ReactNode;
  title?: React.ReactNode;
  /** Imagem de capa (URL) ou nó customizado */
  image?: string | React.ReactNode;
  imageAlt?: string;
  imageHeight?: number;
  /** Botões/links no rodapé do card */
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export type ContentCardFactory = Factory<{
  props: ContentCardProps;
  ref: HTMLDivElement;
  stylesNames: ContentCardStylesNames;
}>;

/** Card de conteúdo: superfície branca sobre LightGray, borda suave e sombra pequena (ds-card). */
export const ContentCard = factory<ContentCardFactory>((_props) => {
  const props = useProps('ContentCard', { imageHeight: 180 }, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    kicker, title, image, imageAlt, imageHeight, actions, children, ...others
  } = props;

  const getStyles = useStyles<ContentCardFactory>({
    name: 'ContentCard',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  return (
    <Card {...getStyles('root')} {...others}>
      {image && (
        <div {...getStyles('image')}>
          {typeof image === 'string' ? <img src={image} alt={imageAlt ?? ''} style={{ height: imageHeight }} /> : image}
        </div>
      )}
      {kicker && <Kicker {...getStyles('kicker')}>{kicker}</Kicker>}
      {title && <div {...getStyles('title')}>{title}</div>}
      {children && <div {...getStyles('body')}>{children}</div>}
      {actions && <div {...getStyles('actions')}>{actions}</div>}
    </Card>
  );
});

ContentCard.classes = classes;
ContentCard.displayName = '@jcdecor/ui/ContentCard';
