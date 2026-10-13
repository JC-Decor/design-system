import { Accordion } from '@jcdecor/connect-ui';

const perguntas = [
  {
    value: 'ferias',
    pergunta: 'Com quanto tempo de antecedência peço férias?',
    resposta:
      'Envie a solicitação pelo Connect com pelo menos 30 dias de antecedência. Seu gestor aprova ou sugere outra data, e o RH confirma o pagamento até 2 dias antes do início.',
  },
  {
    value: 'banco',
    pergunta: 'Como funciona o banco de horas?',
    resposta: 'Horas extras viram crédito no banco e devem ser compensadas em até 6 meses. O saldo atualizado aparece em Ponto › Banco de horas.',
  },
  {
    value: 'atestado',
    pergunta: 'Onde envio um atestado médico?',
    resposta:
      'Em Documentos › Enviar documento, escolha “Atestado” e anexe a foto ou o PDF em até 48 horas. O abono aparece no espelho de ponto após a validação do RH.',
  },
  {
    value: 'beneficios',
    pergunta: 'Quando posso alterar meus benefícios?',
    resposta: 'A troca de plano de saúde e a inclusão de dependentes acontecem na janela anual, em novembro, ou em até 30 dias após casamento ou nascimento.',
  },
];

export default function Demo() {
  return (
    <Accordion defaultValue="ferias" w="100%">
      {perguntas.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.pergunta}</Accordion.Control>
          <Accordion.Panel>{item.resposta}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
