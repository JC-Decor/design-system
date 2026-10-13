import { Button, Checkbox, Grid, Group, Icon, Modal, Select, Textarea, TextInput } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const approvers = ['Camila Duarte (gestora)', 'Diego Lima (RH)', 'Paula Nunes (diretoria)'];

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Solicitar férias" size="lg">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            close();
          }}
        >
          <Grid type="container" breakpoints={{ xs: '420px', sm: '560px', md: '720px', lg: '900px', xl: '1100px' }}>
            <Grid.Col span={{ base: 6, sm: 4 }}>
              <TextInput label="Início" placeholder="dd/mm/aaaa" required data-autofocus />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 4 }}>
              <TextInput label="Fim" placeholder="dd/mm/aaaa" required />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <TextInput label="Dias" defaultValue="15" readOnly />
            </Grid.Col>
            <Grid.Col span={12}>
              <Select label="Aprovador" data={approvers} defaultValue={approvers[0]} allowDeselect={false} />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea label="Observações" placeholder="Ex.: viagem marcada, cobertura combinada com a equipe" autosize minRows={2} />
            </Grid.Col>
          </Grid>
          <Checkbox mt="md" label="Vender 1/3 das férias (abono pecuniário)" />
          <Group justify="flex-end" mt="xl">
            <Button variant="ghost" onClick={close}>
              Cancelar
            </Button>
            <Button type="submit">Enviar solicitação</Button>
          </Group>
        </form>
      </Modal>

      <Button leftSection={<Icon name="palm" size={16} />} onClick={open}>
        Solicitar férias
      </Button>
    </>
  );
}
