import { Badge, OverflowList } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 360 };

const filtros = ['Piso vinílico', 'Laminado', 'Porcelanato', 'Carpete', 'Grama sintética', 'Rodapé', 'Manta acústica', 'Cola', 'Perfil', 'Soleira'];

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
          +{ocultos.length} filtros
        </Badge>
      )}
    />
  );
}
