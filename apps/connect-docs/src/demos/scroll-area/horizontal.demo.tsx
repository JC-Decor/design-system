import { Box, Card, Group, Icon, ScrollArea, Text } from '@jcdecor/connect-ui';

const treinamentos = [
  { titulo: 'Integração', horas: '4h', tone: 'blue', icon: 'users' },
  { titulo: 'Segurança do trabalho', horas: '8h', tone: 'coral', icon: 'shield' },
  { titulo: 'LGPD na prática', horas: '2h', tone: 'lavender', icon: 'lock' },
  { titulo: 'Liderança', horas: '12h', tone: 'green', icon: 'target' },
  { titulo: 'Atendimento', horas: '3h', tone: 'yellow', icon: 'chat' },
  { titulo: 'Excel avançado', horas: '6h', tone: 'blue', icon: 'chart' },
  { titulo: 'Feedback 1:1', horas: '2h', tone: 'lavender', icon: 'send' },
  { titulo: 'Primeiros socorros', horas: '4h', tone: 'coral', icon: 'heart' },
];

export default function Demo() {
  return (
    <ScrollArea type="always" scrollbars="x" offsetScrollbars w="100%">
      <Group wrap="nowrap" gap="md">
        {treinamentos.map((t) => (
          <Card key={t.titulo} padding="md" w={180} style={{ flexShrink: 0 }}>
            <Box
              w={36}
              h={36}
              bg={`var(--cn-tone-${t.tone}-bg)`}
              c={`var(--cn-tone-${t.tone}-fg)`}
              style={{ borderRadius: 'var(--ds-radius-sm)', display: 'grid', placeItems: 'center' }}
            >
              <Icon name={t.icon} size={18} />
            </Box>
            <Text fw={700} fz="sm" mt="sm">
              {t.titulo}
            </Text>
            <Text fz="xs" c="var(--ds-text-3)">
              Carga horária: {t.horas}
            </Text>
          </Card>
        ))}
      </Group>
    </ScrollArea>
  );
}
