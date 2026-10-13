import { Icon, PasswordInput, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <PasswordInput label="Com ícone" leftSection={<Icon name="lock" size={16} />} placeholder="Senha" />
      <PasswordInput label="Com erro" defaultValue="1234" error="A senha precisa ter 8 caracteres" />
      <PasswordInput label="Desabilitado" defaultValue="senhasecreta" disabled />
    </SimpleGrid>
  );
}
