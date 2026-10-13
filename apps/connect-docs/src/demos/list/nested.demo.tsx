import { List } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <List>
      <List.Item>Documentos pessoais</List.Item>
      <List.Item>
        Documentos para admissão
        <List withPadding listStyleType="circle">
          <List.Item>CTPS digital</List.Item>
          <List.Item>Comprovante de residência</List.Item>
        </List>
      </List.Item>
      <List.Item>Exame admissional (ASO)</List.Item>
    </List>
  );
}
