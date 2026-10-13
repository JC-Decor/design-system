import { Accordion, SimpleGrid, Text } from '@jcdecor/connect-ui';

const itens = [
  { value: 'ferias', label: 'Férias', texto: 'Solicite com 30 dias de antecedência.' },
  { value: 'banco', label: 'Banco de horas', texto: 'Compense o saldo em até 6 meses.' },
  { value: 'home', label: 'Home office', texto: 'Até 2 dias por semana, combinados com o gestor.' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%" spacing="xl">
      {(['default', 'contained', 'separated', 'filled'] as const).map((variant) => (
        <div key={variant}>
          <Text fz="xs" fw={600} c="var(--ds-text-3)" tt="uppercase" mb="xs">
            {variant}
          </Text>
          <Accordion variant={variant} defaultValue="ferias">
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
