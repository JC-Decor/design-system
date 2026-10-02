import { Button, Collaborator, Group, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

// Por padrão usa currentColor: herda a cor do texto, como um ícone.
export default function Demo() {
  return (
    <Group>
      <Button leftSection={<Collaborator size={18} />}>Agendar instalação</Button>
      <Button variant="outline" leftSection={<Collaborator size={18} />}>Falar com um consultor</Button>
      <Text c="evergreen.7" fw={600}>
        <Collaborator size={18} /> 3 instaladores disponíveis
      </Text>
    </Group>
  );
}
