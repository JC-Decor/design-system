import { useState } from 'react';
import { Group, Radio, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 440 };

const opcoes = [
  { value: 'folga', label: 'Folga compensada', description: 'Agende com o gestor em até 90 dias', saldo: '1 dia' },
  { value: 'pagamento', label: 'Pagamento na folha', description: 'Adicional de 50% no próximo holerite', saldo: '8h' },
  { value: 'manter', label: 'Manter no saldo', description: 'Expira no fechamento do semestre', saldo: '8h' },
];

export default function Demo() {
  const [value, setValue] = useState('folga');

  return (
    <Radio.Group value={value} onChange={setValue} label="Saldo do banco de horas" description="Você tem 8h positivas">
      <Stack gap="xs" mt="xs">
        {opcoes.map((opcao) => (
          <Radio.Card key={opcao.value} value={opcao.value} p="md">
            <Group wrap="nowrap" align="flex-start">
              <Radio.Indicator />
              <div style={{ flex: 1 }}>
                <Text fw={600} fz="sm">
                  {opcao.label}
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  {opcao.description}
                </Text>
              </div>
              <Text fz="sm" fw={600}>
                {opcao.saldo}
              </Text>
            </Group>
          </Radio.Card>
        ))}
      </Stack>
    </Radio.Group>
  );
}
