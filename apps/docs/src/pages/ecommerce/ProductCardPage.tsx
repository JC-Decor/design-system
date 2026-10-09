import { ProductCard } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';
import ProductCardPreview from '../../vue-demos/product-card/ProductCardPreview.vue';

export default function ProductCardPage() {
  return (
    <DocPage
      kicker="E-commerce"
      title="ProductCard"
      source="jc"
      sourcePath="packages/ui/src/components/ProductCard"
      description="Card de produto da vitrine: imagem com selos e favorito, categoria, nome, avaliação, preço (PriceTag) e botão de compra."
      importCode={`import { ProductCard } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={ProductCard}
          name="ProductCard"
          controls={[
            { prop: 'name', type: 'string', initialValue: 'Piso vinílico autocolante Carvalho Natural 2 mm' },
            { prop: 'category', type: 'string', initialValue: 'Pisos vinílicos' },
            { prop: 'price', type: 'number', initialValue: 89.9, step: 0.1 },
            { prop: 'oldPrice', type: 'number', initialValue: 119.9, step: 0.1 },
            { prop: 'unit', type: 'string', initialValue: '/m²' },
            { prop: 'rating', type: 'number', initialValue: 4.5, min: 0, max: 5, step: 0.5 },
            { prop: 'actionLabel', type: 'string', initialValue: 'Comprar' },
            { prop: 'showDiscount', type: 'boolean', initialValue: true },
          ]}
          baseProps={{ image: 'https://picsum.photos/seed/carvalho/600/600', onAction: () => {} }}
          codeProps={{ image: '"https://picsum.photos/seed/carvalho/600/600"', onAction: '() => {}' }}
          previewWidth={260}
          vue={{
            component: ProductCardPreview,
            baseProps: { image: 'https://picsum.photos/seed/carvalho/600/600' },
            codeProps: { image: '"https://picsum.photos/seed/carvalho/600/600"', '@action': '() => {}' },
          }}
        />
      </Section>

      <Section title="Uso">
        <P>
          Com <code>oldPrice</code> maior que <code>price</code>, o selo <code>-X%</code> é calculado automaticamente. Com <code>href</code>{' '}
          o nome vira link; com{' '}
          <OnlyFor framework="react"><code>onAction</code></OnlyFor>
          <OnlyFor framework="vue">um listener de <code>@action</code></OnlyFor> aparece o botão de compra e o card ganha hover elevado.
        </P>
        <Demo id="product-card/usage" />
      </Section>

      <Section title="Vitrine">
        <P>Em uma <code>SimpleGrid</code>, os cards têm a mesma altura e o preço fica alinhado ao pé, mesmo com nomes de tamanhos diferentes.</P>
        <Demo id="product-card/grid" />
      </Section>

      <Section title="Favorito">
        <OnlyFor framework="react">
          <P>O botão de coração só aparece quando <code>onFavoriteChange</code> é passado. O estado é controlado por <code>favorite</code>.</P>
        </OnlyFor>
        <OnlyFor framework="vue">
          <P>
            O botão de coração aparece com <code>v-model:favorite</code> (ou quando <code>favorite</code> ou <code>@update:favorite</code> é
            passado). Cada clique emite <code>update:favorite</code> com o novo estado.
          </P>
        </OnlyFor>
        <Demo id="product-card/favorite" />
      </Section>

      <Section title="Selos">
        <OnlyFor framework="react">
          <P>
            <code>badges</code> recebe uma lista de nós (normalmente <code>Tag</code> com <code>variant="filled"</code>), exibidos depois do
            selo de desconto. Dê uma <code>key</code> a cada item.
          </P>
        </OnlyFor>
        <OnlyFor framework="vue">
          <P>
            O slot <code>#badges</code> recebe os selos extras (normalmente <code>Tag</code> com <code>variant="filled"</code>), exibidos
            depois do selo de desconto. A prop <code>badges</code> também aceita uma lista de nós; o slot vem depois dela.
          </P>
        </OnlyFor>
        <Demo id="product-card/badges" />
      </Section>

      <Section title="Pagamento e unidade">
        <P>
          <code>installments</code>, <code>pixDiscount</code> e <code>unit</code> são repassados ao <code>PriceTag</code>.{' '}
          <code>imageRatio</code> muda a proporção da imagem (largura/altura).
        </P>
        <Demo id="product-card/payment" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'name', type: 'string', required: true, description: 'Nome do produto (máx. 2 linhas). Também é o alt da imagem.' },
            { name: 'image', type: 'string', required: true, description: 'URL da imagem.' },
            { name: 'price', type: 'number', required: true, description: 'Preço atual em reais.' },
            { name: 'oldPrice', type: 'number', description: 'Preço "de" (riscado).' },
            { name: 'href', type: 'string', description: 'Link do produto (aplicado no nome).' },
            { name: 'linkComponent', type: 'React.ElementType', vueType: 'string | Component', default: "'a'", description: 'Componente do link (ex.: Link do react-router).', vueDescription: 'Componente do link (ex.: RouterLink do vue-router; recebe to e href).' },
            { name: 'category', type: 'string', description: 'Categoria em caixa-alta acima do nome.' },
            { name: 'installments', type: '{ count: number; interestFree?: boolean }', description: 'Parcelamento exibido no PriceTag.' },
            { name: 'pixDiscount', type: 'number', description: 'Desconto no Pix em %.' },
            { name: 'unit', type: 'string', description: 'Unidade do preço (ex.: "/m²", "/rolo").' },
            { name: 'badges', type: 'ReactNode[]', vueType: 'MantineNode[]', description: 'Selos extras sobre a imagem.' },
            { name: '#badges', type: 'slot', only: 'vue', description: 'Selos extras, depois do selo de desconto e da prop badges.' },
            { name: 'showDiscount', type: 'boolean', default: 'true', description: 'Mostra o selo "-X%" calculado a partir de oldPrice.' },
            { name: 'rating', type: 'number', description: 'Nota de 0 a 5 (aceita meia estrela).' },
            { name: 'reviews', type: 'number', description: 'Quantidade de avaliações, ao lado das estrelas.' },
            { name: 'favorite', vueName: 'v-model:favorite', type: 'boolean', description: 'Estado do favorito.', vueDescription: 'Estado do favorito. Passar a prop ou ouvir update:favorite exibe o botão de favorito.' },
            { name: 'onFavoriteChange', vueName: '@update:favorite', type: '(favorite: boolean) => void', description: 'Exibe o botão de favorito.', vueDescription: 'Emitido no clique do coração, com o novo estado.' },
            { name: 'actionLabel', type: 'string', default: "'Comprar'", description: 'Texto do botão de compra.' },
            { name: 'onAction', vueName: '@action', type: '() => void', vueType: '(event: MouseEvent) => void', description: 'Exibe o botão de compra.', vueDescription: 'Clique no botão de compra. O botão só aparece quando há listener.' },
            { name: 'imageRatio', type: 'number', default: '1', description: 'Proporção da imagem (largura/altura).' },
            { name: '...CardProps', type: 'CardProps', description: 'Props do Card do Mantine (padding, radius, shadow…).' },
          ]}
        />
        <P>Styles API: <code>root · media · badges · favorite · category · name · price · action</code>. Variável: <code>--product-ratio</code>.</P>
      </Section>
    </DocPage>
  );
}
