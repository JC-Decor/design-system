import { Button, Checkbox, Fieldset, Group, Stack, TextInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 520 };

export default function Demo() {
  return (
    <Fieldset legend="Dados bancários · alterações só pelo RH" disabled w="100%">
      <Stack>
        <Checkbox label="Conta salário" defaultChecked />
        <Group grow>
          <TextInput label="Agência" defaultValue="0482" />
          <TextInput label="Conta" defaultValue="12034-5" />
        </Group>
        <Button w="fit-content" variant="outline">
          Salvar dados
        </Button>
      </Stack>
    </Fieldset>
  );
}
