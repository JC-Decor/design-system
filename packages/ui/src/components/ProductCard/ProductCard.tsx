import {
  ActionIcon,
  Button,
  Card,
  Group,
  Rating,
  Text,
  factory,
  useProps,
  useStyles,
  type CardProps,
  type Factory,
  type StylesApiProps,
} from '@mantine/core';
import { Fragment } from 'react';
import { IconHeart, IconHeartFilled, IconShoppingCart } from '@tabler/icons-react';
import { PriceTag, type PriceTagProps } from '../PriceTag';
import { Tag } from '../Tag';
import classes from './ProductCard.module.css';

export type ProductCardStylesNames = 'root' | 'media' | 'badges' | 'favorite' | 'category' | 'name' | 'price' | 'action';

export interface ProductCardProps
  extends Omit<CardProps, 'classNames' | 'styles' | 'vars' | 'attributes'>,
    StylesApiProps<ProductCardFactory> {
  name: string;
  image: string;
  href?: string;
  category?: string;
  price: number;
  oldPrice?: number;
  installments?: PriceTagProps['installments'];
  pixDiscount?: number;
  unit?: string;
  /** Selos extras (ex.: "Novo", "Frete grátis") */
  badges?: React.ReactNode[];
  /** Mostra selo "-X%" calculado a partir de oldPrice @default true */
  showDiscount?: boolean;
  rating?: number;
  reviews?: number;
  favorite?: boolean;
  onFavoriteChange?: (favorite: boolean) => void;
  actionLabel?: string;
  onAction?: () => void;
  /** Proporção da imagem (largura/altura) @default 1 */
  imageRatio?: number;
  /** Componente do link (ex.: Link do react-router) @default 'a' */
  linkComponent?: React.ElementType;
}

export type ProductCardFactory = Factory<{
  props: ProductCardProps;
  ref: HTMLDivElement;
  stylesNames: ProductCardStylesNames;
}>;

/** Card de produto do e-commerce: imagem, selos, nome, avaliação, preço e CTA. */
export const ProductCard = factory<ProductCardFactory>((_props) => {
  const props = useProps('ProductCard', { showDiscount: true, actionLabel: 'Comprar', imageRatio: 1, linkComponent: 'a' }, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    name, image, href, category, price, oldPrice, installments, pixDiscount, unit, badges, showDiscount,
    rating, reviews, favorite, onFavoriteChange, actionLabel, onAction, imageRatio, linkComponent: LinkComponent = 'a',
    ...others
  } = props;

  const getStyles = useStyles<ProductCardFactory>({
    name: 'ProductCard',
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

  const discount = oldPrice && oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : 0;
  const linkProps = href ? (LinkComponent === 'a' ? { href } : { to: href, href }) : {};
  const NameComponent: React.ElementType = href ? LinkComponent : 'div';

  return (
    <Card {...getStyles('root')} mod={{ interactive: Boolean(href || onAction) }} {...others}>
      <div {...getStyles('media')} style={{ ['--product-ratio' as string]: String(imageRatio) }}>
        <img src={image} alt={name} loading="lazy" />
        <div {...getStyles('badges')}>
          {showDiscount && discount > 0 && (
            <Tag tone="error" variant="filled">
              -{discount}%
            </Tag>
          )}
          {badges?.map((badge, index) => <Fragment key={index}>{badge}</Fragment>)}
        </div>
        {onFavoriteChange && (
          <ActionIcon
            {...getStyles('favorite')}
            variant="subtle"
            color={favorite ? 'danger' : 'obsidian'}
            radius="xl"
            aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            aria-pressed={favorite}
            onClick={() => onFavoriteChange(!favorite)}
          >
            {favorite ? <IconHeartFilled size={18} /> : <IconHeart size={18} />}
          </ActionIcon>
        )}
      </div>
      {category && <div {...getStyles('category')}>{category}</div>}
      <NameComponent {...linkProps} {...getStyles('name')}>
        {name}
      </NameComponent>
      {rating !== undefined && (
        <Group gap={6} mb="xs">
          <Rating value={rating} fractions={2} readOnly size="xs" color="electric.4" />
          {reviews !== undefined && (
            <Text fz="xs" c="var(--ds-text-3)">
              ({reviews})
            </Text>
          )}
        </Group>
      )}
      <PriceTag
        {...getStyles('price')}
        value={price}
        oldValue={oldPrice}
        installments={installments}
        pixDiscount={pixDiscount}
        unit={unit}
      />
      {onAction && (
        <Button {...getStyles('action')} fullWidth leftSection={<IconShoppingCart size={18} />} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Card>
  );
});

ProductCard.classes = classes;
ProductCard.displayName = '@jcdecor/ui/ProductCard';
