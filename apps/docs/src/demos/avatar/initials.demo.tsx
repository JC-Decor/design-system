import { Avatar, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const nomes = ['Ana Ribeiro', 'Bruno Carvalho', 'Carla Mendes', 'Diego Santos', 'Elisa Prado', 'Fábio Lima'];

export default function Demo() {
  return (
    <Group>
      {nomes.map((nome) => (
        <Avatar key={nome} name={nome} color="initials" />
      ))}
    </Group>
  );
}
