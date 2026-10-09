<script setup lang="ts">
import { Box, Button, Flex, Text, TextInput } from '@jcdecor/vue';
</script>

<template>
  <Flex
    :direction="{ base: 'column', sm: 'row' }"
    :gap="{ base: 'sm', sm: 'lg' }"
    :align="{ base: 'stretch', sm: 'flex-end' }"
    w="100%"
  >
    <Box :flex="1">
      <Text :fw="600" :mb="4">Receba ofertas exclusivas</Text>
      <TextInput placeholder="seu@email.com.br" aria-label="E-mail" />
    </Box>
    <Button>Quero receber</Button>
  </Flex>
</template>
