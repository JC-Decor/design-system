<script setup lang="ts">
import { Avatar, Group } from '@jcdecor/vue';
import { Collaborator, GreekFrame, JcLogo, JcLogoAlt, SpartanHelmet } from '@jcdecor/vue/brand';
import Demo from '../Demo.vue';
import Section from '../Section.vue';
</script>

<template>
  <Section id="marca" kicker="@jcdecor/vue/brand" title="Marca" description="Logos e ilustrações em SVG inline, recoloríveis e adaptados ao tema escuro.">
    <Demo>
      <Group gap="xl" align="center">
        <JcLogo :size="48" />
        <JcLogo type="mark" :size="48" />
        <JcLogoAlt :size="56" />
        <SpartanHelmet :size="72" />
        <GreekFrame :size="104"><Avatar name="Ana Souza" color="initials" :size="64" /></GreekFrame>
        <Collaborator :size="56" color="horizon" />
        <div style="background: var(--dc-obsidian); padding: 12px 16px; border-radius: 12px">
          <JcLogo variant="dark" :size="36" />
        </div>
      </Group>
    </Demo>
  </Section>
</template>
