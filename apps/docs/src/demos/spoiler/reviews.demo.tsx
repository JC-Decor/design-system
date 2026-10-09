import { Group, Rating, Spoiler, Stack, Text } from '@jcdecor/ui';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const avaliacoes = [
  { nome: 'Mariana S.', nota: 5, texto: 'Ótimo acabamento, a instalação foi simples e o resultado ficou idêntico às fotos.' },
  { nome: 'Rafael T.', nota: 5, texto: 'Chegou antes do prazo e bem embalado. Comprei mais duas caixas para o corredor.' },
  { nome: 'Juliana P.', nota: 4, texto: 'A cor é um pouco mais escura que no site, mas ficou linda com a iluminação da sala.' },
  { nome: 'Pedro A.', nota: 5, texto: 'Atendimento excelente: tiraram todas as dúvidas sobre a quantidade pelo chat.' },
];

export default function Demo() {
  return (
    <Spoiler
      maxHeight={150}
      w="100%"
      showLabel={
        <Group gap={4}>
          Ver todas as avaliações <IconChevronDown size={16} />
        </Group>
      }
      hideLabel={
        <Group gap={4}>
          Ver menos <IconChevronUp size={16} />
        </Group>
      }
    >
      <Stack gap="md">
        {avaliacoes.map((a) => (
          <div key={a.nome}>
            <Group gap="xs">
              <Text fz="sm" fw={600}>
                {a.nome}
              </Text>
              <Rating value={a.nota} readOnly size="xs" />
            </Group>
            <Text fz="sm" c="var(--ds-text-2)" mt={2}>
              {a.texto}
            </Text>
          </div>
        ))}
      </Stack>
    </Spoiler>
  );
}
