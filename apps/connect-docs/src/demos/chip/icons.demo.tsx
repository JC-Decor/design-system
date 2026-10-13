import { useState } from 'react';
import { Chip, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [ativos, setAtivos] = useState(true);

  return (
    <Group justify="center">
      <Chip checked={ativos} onChange={setAtivos} icon={<Icon name="check" size={14} />} color="green">
        Ativos
      </Chip>
      <Chip defaultChecked icon={<Icon name="palm" size={14} />} color="yellow">
        Em férias
      </Chip>
      <Chip defaultChecked icon={<Icon name="clock" size={14} />} color="coral">
        Ponto atrasado
      </Chip>
      <Chip size="lg">Tamanho lg</Chip>
      <Chip size="xs">Tamanho xs</Chip>
    </Group>
  );
}
