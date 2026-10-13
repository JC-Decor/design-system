import { DataList } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480 };

const dados = [
  { label: 'Matrícula', value: '004182' },
  { label: 'Cargo', value: 'Analista de RH Pleno' },
  { label: 'Área', value: 'Gente & Gestão' },
  { label: 'Gestora', value: 'Paula Andrade' },
  { label: 'Admissão', value: '14/03/2022' },
  { label: 'Jornada', value: '44h semanais · híbrido' },
];

export default function Demo() {
  return (
    <DataList withDivider labelWidth={140}>
      {dados.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList>
  );
}
