import { Button, FocusTrap, Paper, Stack, TextInput } from '@jcdecor/connect-ui';
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
            <TextInput label="Data" placeholder="dd/mm/aaaa" />
            <TextInput label="Horas" placeholder="2h30" />
            <Button variant="outline">Lançar ajuste de ponto</Button>
          </Stack>
        </Paper>
      </FocusTrap>
    </Stack>
  );
}
