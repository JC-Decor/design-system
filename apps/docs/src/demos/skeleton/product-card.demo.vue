<script lang="ts">
export const meta = { centered: true, maxWidth: 320 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Card, CardSection, Group, Skeleton, Stack, Switch, Text } from '@jcdecor/vue';

const loading = ref(true);
</script>

<template>
  <Stack>
    <Switch v-model="loading" label="Carregando" />
    <Card>
      <CardSection>
        <Skeleton :visible="loading" :radius="0">
          <div
            :style="{
              height: '160px',
              background: 'linear-gradient(135deg, var(--mantine-color-evergreen-3), var(--mantine-color-evergreen-6))',
            }"
          />
        </Skeleton>
      </CardSection>
      <Skeleton :visible="loading" mt="md" w="70%">
        <Text :fw="600">Grama sintética Premium 25 mm</Text>
      </Skeleton>
      <Skeleton :visible="loading" mt="xs">
        <Text fz="sm" c="var(--ds-text-2)">Toque macio, proteção UV e drenagem rápida.</Text>
      </Skeleton>
      <Skeleton :visible="loading" mt="sm" w="40%">
        <Text :fw="700" fz="lg" c="var(--ds-primary)">R$ 89,90/m²</Text>
      </Skeleton>
      <Group mt="md">
        <Skeleton :visible="loading" w="auto">
          <Button size="sm">Adicionar ao carrinho</Button>
        </Skeleton>
      </Group>
    </Card>
  </Stack>
</template>
