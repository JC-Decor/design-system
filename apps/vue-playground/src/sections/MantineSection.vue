<script setup lang="ts">
import { ref } from 'vue';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  ActionIcon,
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  Group,
  Modal,
  NumberInput,
  Pagination,
  Progress,
  Rating,
  SegmentedControl,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  TextInput,
  Textarea,
  Tooltip,
} from '@jcdecor/vue';
import { IconHeart, IconInfoCircle, IconSearch, IconShoppingCart } from '@tabler/icons-vue';
import Demo from '../Demo.vue';
import Section from '../Section.vue';

const name = ref('');
const room = ref<string | null>('sala');
const period = ref('30d');
const accept = ref(true);
const notify = ref(false);
const page = ref(2);
const stars = ref(4);
const tab = ref<string | null>('descricao');
const modal = ref(false);
</script>

<template>
  <Section
    id="mantine"
    kicker="Mantine Vue · temado"
    title="Componentes do Mantine com a cara da JC Decor"
    description="Todos os componentes do @mantine-vue/core são reexportados pelo @jcdecor/vue com o tema aplicado (cores, raios, tamanhos md de 40px, variantes accent/outline/light)."
  >
    <Demo title="Botões">
      <Group>
        <Button>Primário</Button>
        <Button variant="outline">Secundário</Button>
        <Button variant="accent">Destaque</Button>
        <Button variant="subtle">Ghost</Button>
        <Button color="evergreen">
          <template #leftSection><IconShoppingCart :size="18" /></template>
          Comprar
        </Button>
        <Button color="danger" variant="light">Excluir</Button>
        <Button loading>Salvando</Button>
        <Tooltip label="Favoritar">
          <ActionIcon variant="light" aria-label="Favoritar"><IconHeart :size="18" /></ActionIcon>
        </Tooltip>
      </Group>
    </Demo>

    <Demo title="Campos">
      <SimpleGrid :cols="{ base: 1, sm: 2 }">
        <TextInput v-model="name" label="Nome" placeholder="Seu nome" description="Como aparece no pedido">
          <template #leftSection><IconSearch :size="16" /></template>
        </TextInput>
        <Select v-model="room" label="Ambiente" :data="[{ value: 'sala', label: 'Sala' }, { value: 'quarto', label: 'Quarto' }, { value: 'cozinha', label: 'Cozinha' }]" />
        <NumberInput label="Largura (cm)" :default-value="180" :min="40" suffix=" cm" />
        <TextInput label="CEP" placeholder="00000-000" error="CEP inválido" />
        <Textarea label="Observações" placeholder="Detalhes da instalação" autosize :min-rows="2" />
        <Stack gap="sm" justify="center">
          <Checkbox v-model="accept" label="Aceito os termos" />
          <Switch v-model="notify" label="Receber novidades" />
          <SegmentedControl v-model="period" :data="['7d', '30d', '90d']" />
        </Stack>
      </SimpleGrid>
    </Demo>

    <Demo title="Seleção, navegação e feedback">
      <Stack>
        <Group>
          <Chip default-checked>Cortinas</Chip>
          <Chip>Persianas</Chip>
          <Badge>Novo</Badge>
          <Badge color="evergreen">Entregue</Badge>
          <Badge color="electric">Pendente</Badge>
          <Badge color="danger">Cancelado</Badge>
          <Rating v-model="stars" />
        </Group>
        <Pagination v-model="page" :total="8" />
        <Progress :value="64" />
        <Alert title="Frete grátis" color="horizon">
          <template #icon><IconInfoCircle /></template>
          Nas compras acima de R$ 299 para todo o Brasil.
        </Alert>
        <Group>
          <Button variant="outline" @click="modal = true">Abrir modal</Button>
        </Group>
      </Stack>
    </Demo>

    <Demo title="Tabs, accordion e card">
      <SimpleGrid :cols="{ base: 1, sm: 2 }">
        <Tabs v-model="tab">
          <TabsList>
            <TabsTab value="descricao">Descrição</TabsTab>
            <TabsTab value="medidas">Medidas</TabsTab>
          </TabsList>
          <TabsPanel value="descricao" pt="sm"><Text fz="sm">Cortina blackout em linho, trilho incluso.</Text></TabsPanel>
          <TabsPanel value="medidas" pt="sm"><Text fz="sm">Até 3,00 m × 2,80 m.</Text></TabsPanel>
        </Tabs>
        <Accordion default-value="troca">
          <AccordionItem value="troca">
            <AccordionControl>Posso trocar?</AccordionControl>
            <AccordionPanel>Sim, em até 7 dias após o recebimento.</AccordionPanel>
          </AccordionItem>
          <AccordionItem value="instalacao">
            <AccordionControl>Vocês instalam?</AccordionControl>
            <AccordionPanel>Sim, na Grande São Paulo.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </SimpleGrid>
      <Card mt="md" maw="360px">
        <Text fw="600">Card</Text>
        <Text fz="sm" c="var(--ds-text-2)">Raio 12px, borda suave e sombra pequena por padrão.</Text>
      </Card>
    </Demo>

    <Modal :opened="modal" title="Confirmar pedido" @close="modal = false">
      <Text fz="sm">Overlay navy da marca, raio 12px e centralizado por padrão.</Text>
      <Group justify="flex-end" mt="lg">
        <Button variant="subtle" @click="modal = false">Cancelar</Button>
        <Button @click="modal = false">Confirmar</Button>
      </Group>
    </Modal>
  </Section>
</template>
