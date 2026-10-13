import { BackgroundImage, Box, Button, Kicker, Text, Title } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <BackgroundImage src="https://picsum.photos/seed/semana-saude/1200/600" w="100%">
      <Box
        p={{ base: 'lg', sm: 40 }}
        mih={260}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          borderRadius: 'inherit',
          background: 'linear-gradient(90deg, color-mix(in srgb, var(--cn-navy-900) 88%, transparent) 0%, color-mix(in srgb, var(--cn-navy-900) 40%, transparent) 70%, transparent 100%)',
        }}
      >
        <Kicker c="var(--cn-lavender-100)">Comunicado · RH</Kicker>
        <Title order={2} c="white" mt={4} maw={420}>
          Semana da Saúde 2026
        </Title>
        <Text c="var(--cn-navy-100)" mt="xs" maw={420}>
          De 20 a 24 de outubro: vacinação, check-up e palestras sobre bem-estar em todas as unidades.
        </Text>
        <Button variant="white" color="navy" mt="lg" w="fit-content">
          Ver programação
        </Button>
      </Box>
    </BackgroundImage>
  );
}
