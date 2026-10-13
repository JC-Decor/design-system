import { Accordion, Icon, type IconName } from '@jcdecor/connect-ui';

const secoes: { value: string; icon: IconName; titulo: string; texto: string }[] = [
  {
    value: 'ponto',
    icon: 'clock',
    titulo: 'Ponto e jornada',
    texto: 'Registre entrada, intervalo e saída pelo app ou pelo relógio da unidade. Ajustes de marcação precisam da aprovação do gestor.',
  },
  {
    value: 'ferias',
    icon: 'palm',
    titulo: 'Férias',
    texto: 'Até 3 períodos por ano, sendo um deles com no mínimo 14 dias. Você pode vender até 1/3 das férias no momento da solicitação.',
  },
  {
    value: 'documentos',
    icon: 'doc',
    titulo: 'Documentos',
    texto: 'Holerites, informe de rendimentos e contrato ficam em Documentos. Comprovantes enviados por você passam pela validação do RH.',
  },
];

export default function Demo() {
  return (
    <Accordion variant="separated" multiple defaultValue={['ponto']} w="100%">
      {secoes.map(({ value, icon, titulo, texto }) => (
        <Accordion.Item key={value} value={value}>
          <Accordion.Control icon={<Icon name={icon} size={18} c="var(--ds-primary)" />}>{titulo}</Accordion.Control>
          <Accordion.Panel>{texto}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
