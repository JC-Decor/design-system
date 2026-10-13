import { DetailGrid, DetailItem } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <DetailGrid
      items={[
        { label: 'Colaborador', value: 'Ana Souza', hint: 'Analista de RH' },
        { label: 'Período', value: '04/11 a 18/11' },
        { label: 'Dias úteis', value: '10' },
      ]}
    >
      <DetailItem label="Motivo" span="full">
        Viagem em família — combinado com o gestor em outubro.
      </DetailItem>
    </DetailGrid>
  );
}
