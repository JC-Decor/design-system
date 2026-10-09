<script setup lang="ts">
import { Pagination, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Stack gap="lg">
    <div>
      <Text fz="sm" :fw="500" :mb="6">Com primeira e última página</Text>
      <Pagination :total="20" :default-value="8" with-edges />
    </div>
    <div>
      <Text fz="sm" :fw="500" :mb="6">siblings=2 e boundaries=2</Text>
      <Pagination :total="20" :default-value="10" :siblings="2" :boundaries="2" />
    </div>
    <div>
      <Text fz="sm" :fw="500" :mb="6">Somente setas</Text>
      <Pagination :total="12" :default-value="4" :with-pages="false" />
    </div>
  </Stack>
</template>
