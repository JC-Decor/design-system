<script setup lang="ts">
import { Tabs, TabsList, TabsPanel, TabsTab, Text } from '@jcdecor/vue';
import { IconBell, IconLock, IconMapPin, IconUser } from '@tabler/icons-vue';
</script>

<template>
  <Tabs default-value="dados" orientation="vertical">
    <TabsList>
      <TabsTab value="dados">
        <template #leftSection><IconUser :size="16" /></template>
        Meus dados
      </TabsTab>
      <TabsTab value="enderecos">
        <template #leftSection><IconMapPin :size="16" /></template>
        Endereços
      </TabsTab>
      <TabsTab value="notificacoes">
        <template #leftSection><IconBell :size="16" /></template>
        Notificações
      </TabsTab>
      <TabsTab value="seguranca">
        <template #leftSection><IconLock :size="16" /></template>
        Segurança
      </TabsTab>
    </TabsList>

    <TabsPanel value="dados" px="lg">
      <Text fz="sm" c="var(--ds-text-2)">Nome, CPF, telefone e e-mail usados nas suas compras.</Text>
    </TabsPanel>
    <TabsPanel value="enderecos" px="lg">
      <Text fz="sm" c="var(--ds-text-2)">Gerencie os endereços de entrega e cobrança.</Text>
    </TabsPanel>
    <TabsPanel value="notificacoes" px="lg">
      <Text fz="sm" c="var(--ds-text-2)">Escolha como quer receber promoções e o status dos pedidos.</Text>
    </TabsPanel>
    <TabsPanel value="seguranca" px="lg">
      <Text fz="sm" c="var(--ds-text-2)">Altere sua senha e veja os dispositivos conectados.</Text>
    </TabsPanel>
  </Tabs>
</template>
