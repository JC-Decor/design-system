import { Button, Card, Kicker, SimpleGrid, Text } from '@jcdecor/connect-ui';

const destaques = [
  { kicker: 'Comunicado', title: 'Novo plano odontológico', body: 'A partir de novembro, cobertura ampliada para dependentes sem carência.' },
  { kicker: 'Treinamento', title: 'Segurança da informação', body: 'Trilha obrigatória de 40 minutos. Conclua até 30/10 pelo Connect.' },
  { kicker: 'Política', title: 'Home office 2026', body: 'Até 2 dias por semana, combinados com o gestor e registrados no ponto.' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      {destaques.map((item) => (
        <Card key={item.title}>
          <Kicker>{item.kicker}</Kicker>
          <Text fw={700} fz="lg" mt={4}>
            {item.title}
          </Text>
          <Text fz="sm" c="var(--ds-text-2)" mt="xs">
            {item.body}
          </Text>
          <Button size="sm" variant="outline" mt="md">
            Ler mais
          </Button>
        </Card>
      ))}
    </SimpleGrid>
  );
}
