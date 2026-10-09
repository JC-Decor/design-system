import { Button, Checkbox, Grid, Group, Modal, Select, TextInput } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import { IconMapPin } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const states = ['BA', 'MG', 'PR', 'RJ', 'RS', 'SC', 'SP'];

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Novo endereço de entrega" size="lg">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            close();
          }}
        >
          <Grid type="container" breakpoints={{ xs: '420px', sm: '560px', md: '720px', lg: '900px', xl: '1100px' }}>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <TextInput label="CEP" placeholder="00000-000" required data-autofocus />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 8 }}>
              <TextInput label="Rua" placeholder="Av. Paulista" required />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 4 }}>
              <TextInput label="Número" placeholder="1000" required />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 8 }}>
              <TextInput label="Complemento" placeholder="Apto 42, bloco B" />
            </Grid.Col>
            <Grid.Col span={{ base: 8, sm: 8 }}>
              <TextInput label="Cidade" placeholder="São Paulo" required />
            </Grid.Col>
            <Grid.Col span={{ base: 4, sm: 4 }}>
              <Select label="UF" data={states} defaultValue="SP" allowDeselect={false} />
            </Grid.Col>
          </Grid>
          <Checkbox mt="md" label="Usar como endereço principal" defaultChecked />
          <Group justify="flex-end" mt="xl">
            <Button variant="subtle" onClick={close}>
              Cancelar
            </Button>
            <Button type="submit">Salvar endereço</Button>
          </Group>
        </form>
      </Modal>

      <Button leftSection={<IconMapPin size={18} />} onClick={open}>
        Adicionar endereço
      </Button>
    </>
  );
}
