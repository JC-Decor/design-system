import { Accordion } from '@jcdecor/ui';
import { IconCreditCard, IconRefresh, IconTruckDelivery } from '@tabler/icons-react';

const secoes = [
  {
    value: 'entrega',
    icon: IconTruckDelivery,
    titulo: 'Entrega',
    texto: 'Enviamos para todo o Brasil. Produtos grandes, como painéis e pisos, são entregues por transportadora com agendamento.',
  },
  {
    value: 'pagamento',
    icon: IconCreditCard,
    titulo: 'Pagamento',
    texto: 'Cartão em até 10x sem juros, boleto ou Pix com 5% de desconto. O pedido é confirmado assim que o pagamento é aprovado.',
  },
  {
    value: 'troca',
    icon: IconRefresh,
    titulo: 'Troca e devolução',
    texto: 'Solicite pelo app ou site em até 30 dias. O reembolso é feito na mesma forma de pagamento da compra.',
  },
];

export default function Demo() {
  return (
    <Accordion variant="separated" multiple defaultValue={['entrega']} w="100%">
      {secoes.map(({ value, icon: Icon, titulo, texto }) => (
        <Accordion.Item key={value} value={value}>
          <Accordion.Control icon={<Icon size={20} color="var(--ds-primary)" />}>{titulo}</Accordion.Control>
          <Accordion.Panel>{texto}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
