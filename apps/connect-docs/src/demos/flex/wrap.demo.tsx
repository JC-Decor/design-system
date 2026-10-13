import { Chip, Flex } from '@jcdecor/connect-ui';

const equipes = ['Comercial', 'Logística', 'Gente & Gestão', 'Financeiro', 'Marketing', 'Tecnologia', 'Atendimento', 'Jurídico'];

export default function Demo() {
  return (
    <Flex wrap="wrap" gap="xs" maw={420}>
      {equipes.map((equipe, index) => (
        <Chip key={equipe} defaultChecked={index < 2} size="sm">
          {equipe}
        </Chip>
      ))}
    </Flex>
  );
}
