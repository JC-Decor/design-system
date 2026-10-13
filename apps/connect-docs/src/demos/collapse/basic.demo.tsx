import { Button, Collapse, Stack, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480 };

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Stack gap="sm" w="100%">
      <Button
        variant="subtle"
        onClick={toggle}
        rightSection={<IconChevronDown size={16} style={{ transform: opened ? 'rotate(180deg)' : undefined, transition: 'transform 200ms' }} />}
        aria-expanded={opened}
        style={{ alignSelf: 'flex-start' }}
      >
        {opened ? 'Ocultar' : 'Ver'} regras do banco de horas
      </Button>
      <Collapse expanded={opened}>
        <Text fz="sm" c="var(--ds-text-2)">
          Horas extras entram no banco na proporção 1:1 e devem ser compensadas em até 6 meses. Saldos negativos acima de 8h precisam de
          aprovação do gestor. O fechamento acontece todo dia 20 e o saldo aparece no seu espelho de ponto.
        </Text>
      </Collapse>
    </Stack>
  );
}
