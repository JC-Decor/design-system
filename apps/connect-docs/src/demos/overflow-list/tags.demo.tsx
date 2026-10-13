import { Badge, OverflowList, Paper, Text, Tooltip } from '@jcdecor/connect-ui';

const competencias = ['Comunicação', 'Liderança', 'Excel avançado', 'Power BI', 'Negociação', 'Inglês', 'Gestão de projetos', 'Scrum', 'Atendimento', 'Recrutamento', 'Legislação trabalhista'];

export default function Demo() {
  return (
    <Paper withBorder p="md" w="100%" maw={520} style={{ resize: 'horizontal', overflow: 'hidden', minWidth: 200 }}>
      <Text fz="xs" c="var(--ds-text-3)" mb="xs">
        Arraste o canto para redimensionar
      </Text>
      <OverflowList
        data={competencias}
        gap={6}
        renderItem={(item) => (
          <Badge key={item} color="ink">
            {item}
          </Badge>
        )}
        renderOverflow={(ocultas) => (
          <Tooltip label={ocultas.join(', ')} multiline w={220}>
            <Badge variant="outline" color="ink" style={{ cursor: 'default' }}>
              +{ocultas.length}
            </Badge>
          </Tooltip>
        )}
      />
    </Paper>
  );
}
