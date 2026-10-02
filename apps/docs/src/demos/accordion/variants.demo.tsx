import { Accordion, SimpleGrid, Text } from '@jcdecor/ui';

const itens = [
  { value: 'prazo', label: 'Prazo de entrega', texto: 'Até 3 dias úteis nas capitais do Sudeste.' },
  { value: 'troca', label: 'Trocas e devoluções', texto: 'Até 30 dias após o recebimento.' },
  { value: 'garantia', label: 'Garantia', texto: '5 anos contra defeitos de fabricação.' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%" spacing="xl">
      {(['default', 'contained', 'separated', 'filled'] as const).map((variant) => (
        <div key={variant}>
          <Text fz="xs" fw={600} c="var(--ds-text-3)" tt="uppercase" mb="xs">
            {variant}
          </Text>
          <Accordion variant={variant} defaultValue="prazo">
            {itens.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.Control>{item.label}</Accordion.Control>
                <Accordion.Panel>{item.texto}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      ))}
    </SimpleGrid>
  );
}
