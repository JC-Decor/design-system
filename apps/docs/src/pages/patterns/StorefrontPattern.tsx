import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';

export default function StorefrontPattern() {
  return (
    <DocPage
      kicker="Padrões"
      title="Vitrine de produtos"
      description="Página de categoria do e-commerce: banner promocional, filtros por categoria, ordenação e grade de ProductCard."
    >
      <Section title="Exemplo">
        <P>
          Os chips filtram por categoria, o select ordena por preço ou avaliação, o coração favorita
          e “Adicionar” incrementa o carrinho. O banner pode ser fechado.
        </P>
        <Demo id="patterns/storefront" />
      </Section>

      <Section title="Composição">
        <P>
          <code>PromoBanner</code> full-bleed com <code>highlight</code> (cupom) → título com
          contagem e <code>Select</code> de ordenação → <code>Chip.Group</code> de categorias →{' '}
          <code>SimpleGrid</code> responsivo (1 · 2 · 3 · 4 colunas) de <code>ProductCard</code> com
          preço antigo, parcelamento, desconto no Pix, avaliação e selos <code>Tag</code>.
        </P>
      </Section>
    </DocPage>
  );
}
