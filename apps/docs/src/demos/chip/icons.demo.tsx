import { useState } from 'react';
import { Chip, Group } from '@jcdecor/ui';
import { IconStarFilled, IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [frete, setFrete] = useState(true);

  return (
    <Group justify="center">
      <Chip checked={frete} onChange={setFrete} icon={<IconTruckDelivery size={14} />} color="evergreen">
        Frete grátis
      </Chip>
      <Chip defaultChecked icon={<IconStarFilled size={14} />}>
        4 estrelas ou mais
      </Chip>
      <Chip size="lg">Tamanho lg</Chip>
      <Chip size="xs">Tamanho xs</Chip>
    </Group>
  );
}
