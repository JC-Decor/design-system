import { useState } from 'react';
import { CheckIcon, ColorSwatch, Group, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const cores = [
  { nome: 'Navy', cor: 'navy' },
  { nome: 'Lavanda', cor: 'lavender' },
  { nome: 'Azul', cor: 'blue' },
  { nome: 'Verde', cor: 'green' },
  { nome: 'Amarelo', cor: 'yellow' },
  { nome: 'Coral', cor: 'coral' },
];

export default function Demo() {
  const [selecionada, setSelecionada] = useState(cores[1]);

  return (
    <Stack gap="xs" align="center">
      <Text fz="sm" c="var(--ds-text-2)">
        Cor da equipe Comercial:{' '}
        <Text span fw={600} c="var(--ds-text)">
          {selecionada.nome}
        </Text>
      </Text>
      <Group gap="sm">
        {cores.map((item) => (
          <ColorSwatch
            key={item.cor}
            component="button"
            color={`var(--mantine-color-${item.cor}-filled)`}
            size={36}
            aria-label={item.nome}
            aria-pressed={selecionada.cor === item.cor}
            onClick={() => setSelecionada(item)}
            style={{ color: 'white', cursor: 'pointer' }}
          >
            {selecionada.cor === item.cor && <CheckIcon size={14} />}
          </ColorSwatch>
        ))}
      </Group>
    </Stack>
  );
}
