<script setup lang="ts">
import { Code } from '@jcdecor/vue';

const exemplo = `<script setup lang="ts">
import { JcProvider } from '@jcdecor/vue';
<\/script>

<template>
  <JcProvider><RouterView /></JcProvider>
</template>`;
</script>

<template>
  <Code block w="100%">{{ exemplo }}</Code>
</template>
