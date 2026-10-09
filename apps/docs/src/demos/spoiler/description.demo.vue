<script setup lang="ts">
import { Spoiler, Text } from '@jcdecor/vue';
</script>

<template>
  <Spoiler :max-height="72" show-label="Ler descrição completa" hide-label="Mostrar menos">
    <Text fz="sm" c="var(--ds-text-2)">
      O painel ripado Freijó traz o calor da madeira natural para salas, quartos e home offices. Produzido em MDF de alta densidade com
      revestimento melamínico, é resistente a riscos e fácil de limpar.
    </Text>
    <Text fz="sm" c="var(--ds-text-2)" mt="sm">
      Cada placa mede 2,70 m × 0,30 m e pode ser instalada na vertical ou na horizontal com cola PU ou parafusos. Combine com fitas de LED entre
      as ripas para criar uma iluminação indireta e valorizar a parede da TV ou a cabeceira da cama.
    </Text>
    <Text fz="sm" c="var(--ds-text-2)" mt="sm">
      Garantia de 5 anos contra defeitos de fabricação. Não recomendado para áreas externas ou molhadas.
    </Text>
  </Spoiler>
</template>
