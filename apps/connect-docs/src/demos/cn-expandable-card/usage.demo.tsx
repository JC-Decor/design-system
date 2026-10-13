import { ActionIcon, ExpandableCard, Icon, StatusBadge, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 600, centered: true };

export default function Demo() {
  return (
    <Stack>
      <ExpandableCard
        icon="megaphone"
        title="Novo plano odontológico"
        subtitle="Benefícios · 10/10"
        summary="A partir de novembro todos os colaboradores CLT têm cobertura sem coparticipação."
        actions={
          <ActionIcon aria-label="Salvar comunicado">
            <Icon name="bookmark" size={16} />
          </ActionIcon>
        }
      >
        <Text fz="sm">Inclua dependentes até 30/10 pelo menu Benefícios. Dúvidas: beneficios@empresa.com.br.</Text>
      </ExpandableCard>
      <ExpandableCard icon="calendar" title="Calendário de feriados 2027" subtitle="RH · 02/10" defaultExpanded>
        <Text fz="sm">12 feriados nacionais, 2 municipais e 3 pontos facultativos.</Text>
      </ExpandableCard>
      <ExpandableCard title="Pesquisa de clima 2025" subtitle={<StatusBadge status="concl" />} disabled>
        <Text fz="sm">Encerrada.</Text>
      </ExpandableCard>
    </Stack>
  );
}
