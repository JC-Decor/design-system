import { Button, Center, Icon, Stack, Text, ThemeIcon } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Center mih={240} w="100%">
      <Stack align="center" gap="xs" maw={320} ta="center">
        <ThemeIcon size={48} radius="xl" variant="light" color="lavender">
          <Icon name="megaphone" size={24} />
        </ThemeIcon>
        <Text fw={700}>Nenhum comunicado publicado</Text>
        <Text fz="sm" c="var(--ds-text-2)">
          Avisos, campanhas e novidades para a equipe aparecem aqui assim que forem publicados.
        </Text>
        <Button mt="sm" leftSection={<Icon name="plus" size={16} />}>
          Novo comunicado
        </Button>
      </Stack>
    </Center>
  );
}
