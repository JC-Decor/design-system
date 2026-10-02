import { List } from '@jcdecor/ui';

export default function Demo() {
  return (
    <List>
      <List.Item>Ferramentas necessárias</List.Item>
      <List.Item>
        Materiais inclusos na caixa
        <List withPadding listStyleType="circle">
          <List.Item>10 réguas de 1,22 m</List.Item>
          <List.Item>Manual de instalação</List.Item>
        </List>
      </List.Item>
      <List.Item>Itens vendidos separadamente</List.Item>
    </List>
  );
}
