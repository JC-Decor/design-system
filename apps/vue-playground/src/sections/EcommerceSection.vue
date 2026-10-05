<script setup lang="ts">
import { ref } from 'vue';
import { CouponCode, Group, PriceTag, ProductCard, SimpleGrid, Tag, Disclaimer } from '@jcdecor/vue';
import Demo from '../Demo.vue';
import Section from '../Section.vue';

const favorites = ref<Record<string, boolean>>({ linho: true });
const cart = ref(0);
const copied = ref('');
</script>

<template>
  <Section id="ecommerce" kicker="E-commerce" title="Loja" description="ProductCard com v-model:favorite e @action, PriceTag com parcelamento e Pix, CouponCode com @copy.">
    <Demo title="ProductCard">
      <SimpleGrid :cols="{ base: 1, xs: 2, md: 3 }">
        <ProductCard
          v-model:favorite="favorites.linho"
          name="Cortina Linho Rústico 2,80 × 2,30 m"
          category="Cortinas"
          image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=70"
          href="#ecommerce"
          :price="389.9"
          :old-price="499.9"
          :installments="{ count: 10 }"
          :pix-discount="5"
          :rating="4.5"
          :reviews="128"
          @action="cart++"
        >
          <template #badges><Tag tone="success" variant="filled">Frete grátis</Tag></template>
        </ProductCard>
        <ProductCard
          v-model:favorite="favorites.persiana"
          name="Persiana Rolô Blackout"
          category="Persianas"
          image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=70"
          :price="229"
          unit="/m²"
          :installments="{ count: 6 }"
          :rating="4"
          :reviews="42"
          action-label="Adicionar"
          @action="cart++"
        />
        <ProductCard
          name="Papel de parede Folhagem"
          category="Papel de parede"
          image="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=70"
          :price="149.9"
          unit="/rolo"
        />
      </SimpleGrid>
      <Disclaimer mt="sm">Itens no carrinho: {{ cart }} · Favoritos: {{ Object.keys(favorites).filter((k) => favorites[k]).join(', ') || '—' }}</Disclaimer>
    </Demo>
    <Demo title="PriceTag e CouponCode">
      <Group align="flex-start" gap="xl">
        <PriceTag :value="389.9" :old-value="499.9" :installments="{ count: 10 }" :pix-discount="5" size="lg" />
        <PriceTag :value="229" unit="/m²" size="sm" />
        <div style="flex: 1 1 280px">
          <CouponCode code="BEMVINDO10" description="10% OFF na primeira compra" @copy="(c: string) => (copied = c)" />
          <Disclaimer mt="xs">{{ copied ? `Copiado: ${copied}` : 'Clique em copiar' }}</Disclaimer>
        </div>
      </Group>
    </Demo>
  </Section>
</template>
