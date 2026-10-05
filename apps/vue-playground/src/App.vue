<script setup lang="ts">
import { JcProvider, ThemeToggle, TopNav, Tag } from '@jcdecor/vue';
import MantineSection from './sections/MantineSection.vue';
import JcSection from './sections/JcSection.vue';
import EcommerceSection from './sections/EcommerceSection.vue';
import ChatSection from './sections/ChatSection.vue';
import ChartsSection from './sections/ChartsSection.vue';
import BrandSection from './sections/BrandSection.vue';

const sections = [
  { id: 'fundamentos', label: 'Fundamentos' },
  { id: 'componentes', label: 'Componentes JC' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'chat', label: 'Chat' },
  { id: 'graficos', label: 'Gráficos' },
  { id: 'marca', label: 'Marca' },
  { id: 'mantine', label: 'Mantine temado' },
];
// Volta para o docs (React): em produção o playground fica em <base>/vue/
// ?tema=escuro abre direto no tema escuro (útil para compartilhar/prints)
const initialScheme = new URLSearchParams(location.search).get('tema') === 'escuro' ? 'dark' : 'light';
const docsHref = import.meta.env.BASE_URL.replace(/vue\/$/, '');
</script>

<template>
  <JcProvider :default-color-scheme="initialScheme" :color-scheme-storage-key="initialScheme === 'dark' ? false : undefined">
    <TopNav :brand-href="docsHref" :links="[{ label: 'Docs (React)', href: docsHref }, { label: 'Vue', href: '#', active: true }]" style="position: sticky; top: 0; z-index: 10">
      <template #rightSection>
        <Tag tone="warn" variant="filled" visible-from="sm">@jcdecor/vue</Tag>
        <ThemeToggle color="gray.0" />
      </template>
    </TopNav>
    <div class="pg-layout">
      <nav class="pg-toc" aria-label="Seções">
        <a v-for="s in sections" :key="s.id" :href="`#${s.id}`">{{ s.label }}</a>
      </nav>
      <main>
        <JcSection />
        <EcommerceSection />
        <ChatSection />
        <ChartsSection />
        <BrandSection />
        <MantineSection />
      </main>
    </div>
  </JcProvider>
</template>
