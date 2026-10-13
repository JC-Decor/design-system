import { Button, Flex, Icon, Select, TextInput } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'md' }}
      align={{ base: 'stretch', sm: 'flex-end' }}
      w="100%"
    >
      <TextInput
        label="Buscar colaborador"
        placeholder="Nome, cargo ou matrícula"
        leftSection={<Icon name="search" size={16} />}
        flex={1}
      />
      <Select label="Equipe" placeholder="Todas" data={['Comercial', 'Logística', 'Gente & Gestão', 'Financeiro']} w={{ sm: 200 }} />
      <Button leftSection={<Icon name="filter" size={16} />}>Filtrar</Button>
    </Flex>
  );
}
