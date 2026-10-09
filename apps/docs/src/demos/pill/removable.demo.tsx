import { useState } from 'react';
import { Button, Group, Pill, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const iniciais = ['Sala', 'Até R$ 100/m²', 'Carvalho', 'Autocolante', 'Pronta entrega'];

export default function Demo() {
  const [filtros, setFiltros] = useState(iniciais);

  return (
    <Group gap="sm">
      <Text fz="sm" c="var(--ds-text-2)">
        Filtros ativos:
      </Text>
      <Pill.Group>
        {filtros.map((filtro) => (
          <Pill key={filtro} withRemoveButton onRemove={() => setFiltros((atual) => atual.filter((f) => f !== filtro))}>
            {filtro}
          </Pill>
        ))}
      </Pill.Group>
      {filtros.length < iniciais.length && (
        <Button size="xs" variant="subtle" onClick={() => setFiltros(iniciais)}>
          Restaurar
        </Button>
      )}
    </Group>
  );
}
