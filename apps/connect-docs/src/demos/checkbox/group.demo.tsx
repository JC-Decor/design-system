import { Checkbox, Group } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Checkbox.Group defaultValue={['comunicados', 'feedbacks']} label="Notificações" description="Escolha o que você quer receber no Painel">
      <Group mt="xs">
        <Checkbox value="comunicados" label="Comunicados" />
        <Checkbox value="feedbacks" label="Feedbacks 1:1" />
        <Checkbox value="treinamentos" label="Treinamentos" />
        <Checkbox value="aniversariantes" label="Aniversariantes" />
      </Group>
    </Checkbox.Group>
  );
}
