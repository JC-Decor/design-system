import { Button, FocusTrap, Paper, Stack, TextInput } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 420 };

export default function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Stack gap="md" w="100%">
      <Button onClick={toggle} variant={active ? 'outline' : 'filled'} style={{ alignSelf: 'flex-start' }}>
        {active ? 'Desativar' : 'Ativar'} focus trap
      </Button>
      <FocusTrap active={active}>
        <Paper withBorder p="md">
          <Stack gap="sm">
            <TextInput label="CEP" placeholder="00000-000" />
            <TextInput label="Número" placeholder="120" />
            <Button variant="outline">Calcular frete</Button>
          </Stack>
        </Paper>
      </FocusTrap>
    </Stack>
  );
}
