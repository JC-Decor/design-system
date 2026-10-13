import { DataList, NumberFormatter } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 420 };

// Demonstrativo de férias: valores em reais com centavos sempre visíveis
const linhas = [
  { rotulo: 'Férias (20 dias)', valor: 4186.67 },
  { rotulo: '1/3 constitucional', valor: 1395.56 },
  { rotulo: 'Abono pecuniário (10 dias)', valor: 2093.33 },
  { rotulo: 'INSS + IRRF', valor: -1257.42 },
];

export default function Demo() {
  return (
    <DataList withDivider labelWidth={200}>
      {linhas.map((linha) => (
        <DataList.Item key={linha.rotulo}>
          <DataList.ItemLabel>{linha.rotulo}</DataList.ItemLabel>
          <DataList.ItemValue>
            <NumberFormatter value={linha.valor} prefix="R$ " decimalScale={2} fixedDecimalScale />
          </DataList.ItemValue>
        </DataList.Item>
      ))}
      <DataList.Item>
        <DataList.ItemLabel>Valor líquido</DataList.ItemLabel>
        <DataList.ItemValue fw={700}>
          <NumberFormatter value={6418.14} prefix="R$ " decimalScale={2} fixedDecimalScale />
        </DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
