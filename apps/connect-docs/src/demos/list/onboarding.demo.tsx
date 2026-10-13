import { List, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <div>
      <Text fw={700} mb="sm">
        Primeiro dia na empresa
      </Text>
      <List type="ordered">
        <List.Item>Retire seu crachá e o kit de boas-vindas na recepção da sede.</List.Item>
        <List.Item>Acesse o Connect com o e-mail corporativo e crie sua senha.</List.Item>
        <List.Item>Confira seus dados pessoais e bancários em Meu perfil.</List.Item>
        <List.Item>Registre o primeiro ponto pelo app ou pelo relógio da unidade.</List.Item>
        <List.Item>Participe da integração às 10h, na sala Ipê.</List.Item>
        <List.Item>Agende o primeiro 1:1 com seu gestor ainda nesta semana.</List.Item>
      </List>
    </div>
  );
}
