import { DataList, NumberFormatter } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 420 };

export default function Demo() {
  return (
    <DataList withDivider labelWidth={180}>
      <DataList.Item>
        <DataList.ItemLabel>Colaboradores ativos</DataList.ItemLabel>
        <DataList.ItemValue>
          <NumberFormatter value={1284} />
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Banco de horas</DataList.ItemLabel>
        <DataList.ItemValue>
          <NumberFormatter value={12.5} suffix=" h" decimalScale={1} />
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Metas concluídas</DataList.ItemLabel>
        <DataList.ItemValue>
          <NumberFormatter value={78.4} suffix="%" decimalScale={1} />
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Turnover (vs. trimestre)</DataList.ItemLabel>
        <DataList.ItemValue>
          <NumberFormatter value={-0.8} suffix=" p.p." decimalScale={1} />
        </DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
