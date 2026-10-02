import { List, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <div>
      <Text fw={600} mb="sm">
        Instalação do piso vinílico click
      </Text>
      <List type="ordered">
        <List.Item>Deixe as caixas no ambiente por 48 horas para aclimatar o material.</List.Item>
        <List.Item>Verifique se o contrapiso está limpo, seco e nivelado (desnível máximo de 2 mm por metro).</List.Item>
        <List.Item>Aplique a manta acústica com as emendas encostadas, sem sobrepor.</List.Item>
        <List.Item>Comece pelo canto mais longo da parede, deixando 8 mm de junta de dilatação.</List.Item>
        <List.Item>Encaixe as réguas em ângulo e pressione até ouvir o clique.</List.Item>
        <List.Item>Finalize com rodapés, sem fixá-los no piso.</List.Item>
      </List>
    </div>
  );
}
