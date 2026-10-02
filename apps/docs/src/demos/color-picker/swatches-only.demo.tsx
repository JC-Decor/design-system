import { useState } from 'react';
import { ColorPicker, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const cores = [
  { nome: 'Linho cru', hex: '#E5D3B3' },
  { nome: 'Caramelo', hex: '#C9A27E' },
  { nome: 'Musgo', hex: '#5B6B5A' },
  { nome: 'Grafite', hex: '#2F3E46' },
  { nome: 'Azul névoa', hex: '#7A8FA6' },
];

export default function Demo() {
  const [value, setValue] = useState(cores[1].hex);
  const selecionada = cores.find((c) => c.hex.toLowerCase() === value.toLowerCase());

  return (
    <Stack align="center" gap="xs">
      <ColorPicker
        withPicker={false}
        swatches={cores.map((c) => c.hex)}
        swatchesPerRow={5}
        value={value}
        onChange={setValue}
        aria-label="Cor do veludo"
      />
      <Text fz="sm" c="var(--ds-text-2)">
        Veludo · <b>{selecionada?.nome}</b>
      </Text>
    </Stack>
  );
}
