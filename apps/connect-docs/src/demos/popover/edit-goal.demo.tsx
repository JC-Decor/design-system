import { useState } from 'react';
import { ActionIcon, Button, Group, Icon, NumberInput, Popover, Select, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, setOpened] = useState(false);
  const [goal, setGoal] = useState(40);
  const [draft, setDraft] = useState<number | string>(goal);

  return (
    <Group gap="xs">
      <Text fz="sm" c="var(--ds-text-2)">
        Meta de treinamento:
      </Text>
      <Text fw={700} fz={16}>
        {goal}h / ano
      </Text>
      <Popover opened={opened} onChange={setOpened} width={280} position="bottom-start" trapFocus returnFocus>
        <Popover.Target>
          <ActionIcon variant="subtle" aria-label="Editar meta" onClick={() => setOpened((value) => !value)}>
            <Icon name="pen" size={16} />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setGoal(Number(draft) || goal);
              setOpened(false);
            }}
          >
            <Stack gap="sm">
              <Text fz="sm" fw={600}>
                Editar meta
              </Text>
              <NumberInput size="sm" label="Horas por ano" value={draft} onChange={setDraft} suffix=" h" min={0} max={200} data-autofocus />
              <Select
                size="sm"
                label="Vale para"
                data={['Toda a equipe', 'Somente gestores', 'Somente novos colaboradores']}
                defaultValue="Toda a equipe"
                allowDeselect={false}
                comboboxProps={{ withinPortal: false }}
              />
              <Group justify="flex-end" gap="xs">
                <Button size="sm" variant="subtle" onClick={() => setOpened(false)}>
                  Cancelar
                </Button>
                <Button size="sm" type="submit">
                  Salvar
                </Button>
              </Group>
            </Stack>
          </form>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
