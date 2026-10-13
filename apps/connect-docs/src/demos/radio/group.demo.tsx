import { Group, Radio } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Radio.Group name="uniforme" label="Tamanho do uniforme" description="Camiseta polo da equipe de expedição" defaultValue="m">
      <Group mt="xs">
        <Radio value="p" label="P" />
        <Radio value="m" label="M" />
        <Radio value="g" label="G" />
        <Radio value="gg" label="GG (sem estoque)" disabled />
      </Group>
    </Radio.Group>
  );
}
