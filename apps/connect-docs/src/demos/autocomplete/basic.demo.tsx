import { Autocomplete, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const sugestoes = ['Férias', 'Banco de horas', 'Holerite', 'Informe de rendimentos', 'Plano de saúde', 'Vale-refeição', 'Atestado médico', 'Feedback 1:1', 'Metas do trimestre'];

export default function Demo() {
  return (
    <Autocomplete
      label="Buscar no painel"
      placeholder="Pessoas, documentos, solicitações…"
      leftSection={<Icon name="search" size={16} />}
      data={sugestoes}
      limit={5}
      clearable
    />
  );
}
