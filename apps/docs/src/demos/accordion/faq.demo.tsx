import { Accordion } from '@jcdecor/ui';

const perguntas = [
  {
    value: 'prazo',
    pergunta: 'Qual é o prazo de entrega?',
    resposta:
      'Capitais do Sudeste recebem em até 3 dias úteis; demais regiões, entre 5 e 12 dias úteis. O prazo exato aparece no carrinho após informar o CEP.',
  },
  {
    value: 'frete',
    pergunta: 'O frete é grátis?',
    resposta: 'Sim, para compras acima de R$ 499,00 nas regiões Sul e Sudeste. Para as demais regiões, o frete é calculado pelo CEP.',
  },
  {
    value: 'troca',
    pergunta: 'Como faço para trocar ou devolver um produto?',
    resposta:
      'Você tem até 30 dias após o recebimento para solicitar a troca de produtos sem uso e na embalagem original. A coleta é gratuita na primeira troca.',
  },
  {
    value: 'avaria',
    pergunta: 'O produto chegou avariado. E agora?',
    resposta: 'Recuse a entrega ou registre fotos da embalagem e fale com o atendimento em até 7 dias. Enviamos um novo item sem custo.',
  },
];

export default function Demo() {
  return (
    <Accordion defaultValue="prazo" w="100%">
      {perguntas.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.pergunta}</Accordion.Control>
          <Accordion.Panel>{item.resposta}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
