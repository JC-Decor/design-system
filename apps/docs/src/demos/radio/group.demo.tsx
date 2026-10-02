import { Group, Radio } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Radio.Group name="acabamento" label="Acabamento" description="Escolha o acabamento do painel ripado" defaultValue="freijo">
      <Group mt="xs">
        <Radio value="freijo" label="Freijó" />
        <Radio value="carvalho" label="Carvalho" />
        <Radio value="nogueira" label="Nogueira" />
        <Radio value="preto" label="Preto fosco" disabled />
      </Group>
    </Radio.Group>
  );
}
