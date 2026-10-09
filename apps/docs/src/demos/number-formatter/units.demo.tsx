import { DataList, NumberFormatter } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 420 };

export default function Demo() {
  return (
    <DataList withDivider labelWidth={160}>
      <DataList.Item>
        <DataList.ItemLabel>Área por caixa</DataList.ItemLabel>
        <DataList.ItemValue>
          <NumberFormatter value={2.2} suffix=" m²" decimalScale={2} />
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Desconto no Pix</DataList.ItemLabel>
        <DataList.ItemValue>
          <NumberFormatter value={5} suffix="%" />
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Vendidos no mês</DataList.ItemLabel>
        <DataList.ItemValue>
          <NumberFormatter value={127237} />
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Variação</DataList.ItemLabel>
        <DataList.ItemValue>
          <NumberFormatter value={-3.45} suffix="%" decimalScale={1}/>
        </DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
