import { Badge, Chip, Group, Stack, statuses, tones, type StatusName } from '@jcdecor/connect-ui';

const equipes = ['Todas', 'Comercial', 'Logística', 'Gente & Gestão'];
const filtrosStatus: StatusName[] = ['ativo', 'pendente', 'atrasado', 'pausado'];

export default function Demo() {
  return (
    <Stack gap="md">
      {/* Filtro de equipe: chips de seleção única */}
      <Chip.Group defaultValue="Todas">
        <Group gap="xs">
          {equipes.map((equipe) => (
            <Chip key={equipe} value={equipe} size="sm">
              {equipe}
            </Chip>
          ))}
        </Group>
      </Chip.Group>

      {/* Status: badges no tom de cada status */}
      <Group gap="xs">
        {filtrosStatus.map((status) => (
          <Badge key={status} variant="light" color={tones[statuses[status].tone].color}>
            {statuses[status].label}
          </Badge>
        ))}
      </Group>
    </Stack>
  );
}
