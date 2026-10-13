import { Avatar, Button, Divider, Drawer, Group, Icon, Select, Stack, Switch, Text, TextInput } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const teams = ['Comercial', 'Financeiro', 'Logística', 'Marketing', 'Pessoas & Cultura'];

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Editar colaborador" position="right" size="md">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            close();
          }}
        >
          <Stack gap="md">
            <Group gap="sm">
              <Avatar size={44} radius="xl" bg="var(--cn-tone-lavender-bg)" c="var(--cn-tone-lavender-fg)">
                MS
              </Avatar>
              <div>
                <Text fz={16} fw={700}>
                  Mariana Souza
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  Matrícula 00482 · admitida em 03/02/2022
                </Text>
              </div>
            </Group>
            <Divider />
            <TextInput label="Nome completo" defaultValue="Mariana Souza" required data-autofocus />
            <TextInput label="E-mail corporativo" defaultValue="mariana.souza@empresa.com.br" type="email" />
            <Group grow>
              <TextInput label="Cargo" defaultValue="Analista de RH" />
              <Select label="Equipe" data={teams} defaultValue="Pessoas & Cultura" allowDeselect={false} />
            </Group>
            <Select label="Gestor" data={['Camila Duarte', 'Diego Lima', 'Paula Nunes']} defaultValue="Camila Duarte" allowDeselect={false} />
            <Switch label="Participa do banco de horas" defaultChecked />
            <Group justify="flex-end" mt="md">
              <Button variant="ghost" onClick={close}>
                Cancelar
              </Button>
              <Button type="submit">Salvar alterações</Button>
            </Group>
          </Stack>
        </form>
      </Drawer>

      <Button variant="outline" leftSection={<Icon name="pen" size={16} />} onClick={open}>
        Editar colaborador
      </Button>
    </>
  );
}
