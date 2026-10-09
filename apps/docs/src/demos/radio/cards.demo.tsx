import { useState } from 'react';
import { Group, Radio, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 440 };

const opcoes = [
  { value: 'expressa', label: 'Entrega expressa', description: 'Chega em até 2 dias úteis', price: 'R$ 39,90' },
  { value: 'padrao', label: 'Entrega padrão', description: 'Chega em 5 a 8 dias úteis', price: 'Grátis' },
  { value: 'retirada', label: 'Retirar na loja', description: 'Disponível amanhã a partir das 10h', price: 'Grátis' },
];

export default function Demo() {
  const [value, setValue] = useState('padrao');

  return (
    <Radio.Group value={value} onChange={setValue} label="Forma de entrega">
      <Stack gap="xs" mt="xs">
        {opcoes.map((opcao) => (
          <Radio.Card key={opcao.value} value={opcao.value} p="md" radius="md">
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
                {opcao.price}
              </Text>
            </Group>
          </Radio.Card>
        ))}
      </Stack>
    </Radio.Group>
  );
}
