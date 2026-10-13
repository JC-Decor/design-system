import { Chip, Group, Scroller } from '@jcdecor/connect-ui';

const equipes = [
  'Todas as equipes', 'Comercial', 'Financeiro', 'Recursos Humanos', 'Logística', 'Atendimento', 'Marketing',
  'Tecnologia', 'Jurídico', 'Compras', 'Operações', 'Diretoria',
];

export default function Demo() {
  return (
    <Scroller w="100%" edgeGradientColor="var(--ds-surface)">
      <Chip.Group defaultValue="Todas as equipes">
        <Group gap="xs" wrap="nowrap">
          {equipes.map((e) => (
            <Chip key={e} value={e} size="sm">
              {e}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
    </Scroller>
  );
}
