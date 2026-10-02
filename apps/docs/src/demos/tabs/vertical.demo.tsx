import { Tabs, Text } from '@jcdecor/ui';
import { IconBell, IconLock, IconMapPin, IconUser } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Tabs defaultValue="dados" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="dados" leftSection={<IconUser size={16} />}>
          Meus dados
        </Tabs.Tab>
        <Tabs.Tab value="enderecos" leftSection={<IconMapPin size={16} />}>
          Endereços
        </Tabs.Tab>
        <Tabs.Tab value="notificacoes" leftSection={<IconBell size={16} />}>
          Notificações
        </Tabs.Tab>
        <Tabs.Tab value="seguranca" leftSection={<IconLock size={16} />}>
          Segurança
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="dados" px="lg">
        <Text fz="sm" c="var(--ds-text-2)">Nome, CPF, telefone e e-mail usados nas suas compras.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="enderecos" px="lg">
        <Text fz="sm" c="var(--ds-text-2)">Gerencie os endereços de entrega e cobrança.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="notificacoes" px="lg">
        <Text fz="sm" c="var(--ds-text-2)">Escolha como quer receber promoções e o status dos pedidos.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="seguranca" px="lg">
        <Text fz="sm" c="var(--ds-text-2)">Altere sua senha e veja os dispositivos conectados.</Text>
      </Tabs.Panel>
    </Tabs>
  );
}
