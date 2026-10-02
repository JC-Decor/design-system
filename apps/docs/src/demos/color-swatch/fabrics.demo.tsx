import { useState } from 'react';
import { CheckIcon, ColorSwatch, Group, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

// Cores reais do tecido (catálogo do produto), não tokens de interface
const tecidos = [
  { nome: 'Linho cru', cor: '#D8CBB3' },
  { nome: 'Areia', cor: '#C2A27C' },
  { nome: 'Terracota', cor: '#B5583A' },
  { nome: 'Verde-oliva', cor: '#6B6B3A' },
  { nome: 'Azul petróleo', cor: '#1F4E5F' },
  { nome: 'Grafite', cor: '#3A3C40' },
];

export default function Demo() {
  const [selecionado, setSelecionado] = useState(tecidos[1]);

  return (
    <Stack gap="xs" align="center">
      <Text fz="sm" c="var(--ds-text-2)">
        Cor do tecido:{' '}
        <Text span fw={600} c="var(--ds-text)">
          {selecionado.nome}
        </Text>
      </Text>
      <Group gap="sm">
        {tecidos.map((tecido) => (
          <ColorSwatch
            key={tecido.nome}
            component="button"
            color={tecido.cor}
            size={36}
            aria-label={tecido.nome}
            aria-pressed={selecionado.nome === tecido.nome}
            onClick={() => setSelecionado(tecido)}
            style={{ color: 'white', cursor: 'pointer' }}
          >
            {selecionado.nome === tecido.nome && <CheckIcon size={14} />}
          </ColorSwatch>
        ))}
      </Group>
    </Stack>
  );
}
