import { Badge, OverflowList } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 360 };

const filtros = ['Comercial', 'Financeiro', 'Logística', 'Tecnologia', 'Gente & Gestão', 'Marketing', 'Jurídico', 'Atendimento', 'Compras', 'Facilities'];

export default function Demo() {
  return (
    <OverflowList
      data={filtros}
      maxRows={2}
      gap={6}
      renderItem={(filtro) => (
        <Badge key={filtro} size="lg">
          {filtro}
        </Badge>
      )}
      renderOverflow={(ocultos) => (
        <Badge size="lg" variant="outline">
          +{ocultos.length} áreas
        </Badge>
      )}
    />
  );
}
