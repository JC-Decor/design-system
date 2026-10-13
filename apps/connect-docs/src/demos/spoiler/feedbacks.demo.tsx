import { Avatar, Group, Icon, Spoiler, Stack, Text } from '@jcdecor/connect-ui';

const feedbacks = [
  { nome: 'Paula Andrade', data: '08/10', texto: 'Ótima condução da integração dos novos analistas — o roteiro ficou claro e todos começaram produtivos.' },
  { nome: 'Rafael Souza', data: '24/09', texto: 'Sempre disponível para ajudar o time comercial com as dúvidas de ponto e banco de horas.' },
  { nome: 'Juliana Prates', data: '11/09', texto: 'Para o próximo ciclo, vale delegar mais a triagem de currículos e focar nas entrevistas finais.' },
  { nome: 'Diego Santos', data: '30/08', texto: 'A nova planilha de headcount economizou horas de fechamento no fim do mês. Obrigado!' },
];

export default function Demo() {
  return (
    <Spoiler
      maxHeight={150}
      w="100%"
      showLabel={
        <Group gap={4}>
          Ver todos os feedbacks <Icon name="chev" size={16} />
        </Group>
      }
      hideLabel={
        <Group gap={4}>
          Ver menos <Icon name="chev-up" size={16} />
        </Group>
      }
    >
      <Stack gap="md">
        {feedbacks.map((f) => (
          <Group key={f.nome} wrap="nowrap" align="flex-start" gap="sm">
            <Avatar name={f.nome} color="initials" size="sm" />
            <div>
              <Group gap="xs">
                <Text fz="sm" fw={600}>
                  {f.nome}
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  {f.data}
                </Text>
              </Group>
              <Text fz="sm" c="var(--ds-text-2)" mt={2}>
                {f.texto}
              </Text>
            </div>
          </Group>
        ))}
      </Stack>
    </Spoiler>
  );
}
