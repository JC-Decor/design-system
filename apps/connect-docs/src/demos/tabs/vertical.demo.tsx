import { Icon, Tabs, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Tabs defaultValue="dados" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="dados" leftSection={<Icon name="user" size={15} />}>
          Meus dados
        </Tabs.Tab>
        <Tabs.Tab value="dependentes" leftSection={<Icon name="users" size={15} />}>
          Dependentes
        </Tabs.Tab>
        <Tabs.Tab value="notificacoes" leftSection={<Icon name="bell" size={15} />}>
          Notificações
        </Tabs.Tab>
        <Tabs.Tab value="seguranca" leftSection={<Icon name="lock" size={15} />}>
          Segurança
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="dados" px="lg">
        <Text fz="sm" c="var(--ds-text-2)">Nome social, telefone, endereço e contato de emergência.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="dependentes" px="lg">
        <Text fz="sm" c="var(--ds-text-2)">Dependentes do plano de saúde e para o imposto de renda.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="notificacoes" px="lg">
        <Text fz="sm" c="var(--ds-text-2)">Escolha como receber comunicados, aprovações e lembretes de ponto.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="seguranca" px="lg">
        <Text fz="sm" c="var(--ds-text-2)">Altere sua senha e veja os dispositivos conectados.</Text>
      </Tabs.Panel>
    </Tabs>
  );
}
