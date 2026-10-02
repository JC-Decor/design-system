import { Button, Checkbox, Stack, Textarea, TextInput, Title } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack gap="md" w="100%">
      <Title order={4}>Solicitar orçamento</Title>
      <TextInput label="Nome" placeholder="Seu nome completo" />
      <TextInput label="Metragem" placeholder="Ex.: 32 m²" />
      <Textarea label="Ambiente" placeholder="Conte sobre o espaço que deseja renovar" />
      <Checkbox label="Quero receber visita técnica" />
      <Button mt="xs">Enviar pedido</Button>
    </Stack>
  );
}
