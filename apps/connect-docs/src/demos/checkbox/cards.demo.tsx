import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 440 };

const beneficios = [
  { value: 'odonto', label: 'Plano odontológico', description: 'Titular + dependentes, sem carência', valor: 'R$ 32/mês' },
  { value: 'academia', label: 'Vale-academia', description: 'Rede com mais de 3 mil academias', valor: 'R$ 49/mês' },
  { value: 'seguro', label: 'Seguro de vida', description: 'Custeado integralmente pela empresa', valor: 'Sem custo' },
];

export default function Demo() {
  const [value, setValue] = useState<string[]>(['seguro']);

  return (
    <Checkbox.Group value={value} onChange={setValue} label="Benefícios opcionais" description="Valores descontados em folha">
      <Stack gap="xs" mt="xs">
        {beneficios.map((b) => (
          <Checkbox.Card key={b.value} value={b.value} p="md">
            <Group wrap="nowrap" align="flex-start">
              <Checkbox.Indicator />
              <div style={{ flex: 1 }}>
                <Text fw={600} fz="sm">
                  {b.label}
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  {b.description}
                </Text>
              </div>
              <Text fz="sm" fw={600}>
                {b.valor}
              </Text>
            </Group>
          </Checkbox.Card>
        ))}
      </Stack>
    </Checkbox.Group>
  );
}
