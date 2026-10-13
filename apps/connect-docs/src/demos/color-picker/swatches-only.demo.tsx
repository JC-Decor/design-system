import { useState } from 'react';
import { ColorPicker, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const cores = [
  { nome: 'Navy', hex: '#07016B' },
  { nome: 'Lavanda', hex: '#6254C9' },
  { nome: 'Azul', hex: '#315DBC' },
  { nome: 'Verde', hex: '#26864C' },
  { nome: 'Coral', hex: '#C03B2A' },
];

export default function Demo() {
  const [value, setValue] = useState(cores[2].hex);
  const selecionada = cores.find((c) => c.hex.toLowerCase() === value.toLowerCase());

  return (
    <Stack align="center" gap="xs">
      <ColorPicker
        withPicker={false}
        swatches={cores.map((c) => c.hex)}
        swatchesPerRow={5}
        value={value}
        onChange={setValue}
        aria-label="Cor da equipe"
      />
      <Text fz="sm" c="var(--ds-text-2)">
        Equipe Logística · <b>{selecionada?.nome}</b>
      </Text>
    </Stack>
  );
}
