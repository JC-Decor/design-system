import { Button, Checkbox, Fieldset, Group, Stack, TextInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 520 };

export default function Demo() {
  return (
    <Fieldset legend="Endereço de cobrança" disabled w="100%">
      <Stack>
        <Checkbox label="Mesmo endereço de entrega" defaultChecked />
        <Group grow>
          <TextInput label="CEP" defaultValue="04077-000" />
          <TextInput label="Número" defaultValue="1200" />
        </Group>
        <Button w="fit-content" variant="outline">
          Salvar endereço
        </Button>
      </Stack>
    </Fieldset>
  );
}
