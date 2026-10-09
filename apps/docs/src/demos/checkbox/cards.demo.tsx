import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 440 };

const servicos = [
  { value: 'instalacao', label: 'Instalação profissional', description: 'Equipe JC Decor certificada', price: 'R$ 18/m²' },
  { value: 'medicao', label: 'Visita técnica de medição', description: 'Agendada em até 3 dias úteis', price: 'Grátis' },
  { value: 'descarte', label: 'Retirada do piso antigo', description: 'Descarte ecológico do material', price: 'R$ 9/m²' },
];

export default function Demo() {
  const [value, setValue] = useState<string[]>(['medicao']);

  return (
    <Checkbox.Group value={value} onChange={setValue} label="Serviços adicionais">
      <Stack gap="xs" mt="xs">
        {servicos.map((s) => (
          <Checkbox.Card key={s.value} value={s.value} p="md" radius="md">
            <Group wrap="nowrap" align="flex-start">
              <Checkbox.Indicator />
              <div style={{ flex: 1 }}>
                <Text fw={600} fz="sm">
                  {s.label}
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  {s.description}
                </Text>
              </div>
              <Text fz="sm" fw={600}>
                {s.price}
              </Text>
            </Group>
          </Checkbox.Card>
        ))}
      </Stack>
    </Checkbox.Group>
  );
}
