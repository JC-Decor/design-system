import { Icon, Text, Timeline } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Timeline active={2} bulletSize={28}>
      <Timeline.Item bullet={<Icon name="check" size={14} />} title="Proposta aceita">
        <Text fz="sm" c="var(--ds-text-2)">Analista de Dados Pleno · Tecnologia.</Text>
        <Text fz="xs" c="var(--ds-text-3)" mt={4}>22/09 · 16:05</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Icon name="doc" size={14} />} title="Documentos enviados">
        <Text fz="sm" c="var(--ds-text-2)">RG, CPF, CTPS digital e comprovante de residência validados.</Text>
        <Text fz="xs" c="var(--ds-text-3)" mt={4}>26/09 · 10:20</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Icon name="shield" size={14} />} title="Exame admissional">
        <Text fz="sm" c="var(--ds-text-2)">Apto. ASO anexado ao prontuário.</Text>
        <Text fz="xs" c="var(--ds-text-3)" mt={4}>30/09 · 08:40</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Icon name="user-plus" size={14} />} title="Primeiro dia" lineVariant="dashed">
        <Text fz="sm" c="var(--ds-text-3)">Previsto: 06/10 · Integração na sede</Text>
      </Timeline.Item>
    </Timeline>
  );
}
