import { Checkbox, Group } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Checkbox.Group defaultValue={['pisos']} label="Categorias de interesse" description="Vamos personalizar as ofertas para você">
      <Group mt="xs">
        <Checkbox value="pisos" label="Pisos vinílicos" />
        <Checkbox value="papel" label="Papel de parede" />
        <Checkbox value="cortinas" label="Cortinas" />
        <Checkbox value="grama" label="Grama sintética" />
      </Group>
    </Checkbox.Group>
  );
}
