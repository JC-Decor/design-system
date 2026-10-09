<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { AspectRatio, Image } from '@jcdecor/vue';
</script>

<template>
  <AspectRatio :ratio="16 / 9">
    <Image src="https://picsum.photos/seed/sala/600/400" alt="Sala com piso vinílico amadeirado" radius="md" />
  </AspectRatio>
</template>
