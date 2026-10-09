import { DataList } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480 };

const especificacoes = [
  { label: 'Dimensões', value: '2,70 m × 0,30 m × 1,8 cm' },
  { label: 'Material', value: 'MDF de alta densidade com revestimento melamínico' },
  { label: 'Acabamento', value: 'Freijó natural, fosco' },
  { label: 'Peso', value: '7,4 kg por placa' },
  { label: 'Instalação', value: 'Cola PU ou parafusos' },
  { label: 'Garantia', value: '5 anos contra defeitos de fabricação' },
];

export default function Demo() {
  return (
    <DataList withDivider labelWidth={140}>
      {especificacoes.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList>
  );
}
