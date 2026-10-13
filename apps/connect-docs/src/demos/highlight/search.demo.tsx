import { useState } from 'react';
import { Highlight, Icon, Stack, Text, TextInput } from '@jcdecor/connect-ui';

const colaboradores = [
  'Ana Ribeiro — Analista de RH · Gente & Gestão',
  'Bruno Carvalho — Coordenador de Logística',
  'Carla Mendes — Analista Financeira',
  'Diego Santos — Desenvolvedor · Tecnologia',
  'Marina Costa — Analista de RH Pleno · Gente & Gestão',
];

export default function Demo() {
  const [busca, setBusca] = useState('analista');

  return (
    <Stack gap="md" w="100%" maw={480}>
      <TextInput
        value={busca}
        onChange={(e) => setBusca(e.currentTarget.value)}
        placeholder="Buscar colaborador, cargo ou área"
        leftSection={<Icon name="search" size={16} />}
        aria-label="Buscar colaboradores"
      />
      <Stack gap="xs">
        {colaboradores.map((nome) => (
          <Highlight key={nome} highlight={busca} fz="sm">
            {nome}
          </Highlight>
        ))}
        {busca && colaboradores.every((nome) => !nome.toLowerCase().includes(busca.toLowerCase())) && (
          <Text fz="sm" c="var(--ds-text-3)">
            Nenhum colaborador encontrado para “{busca}”.
          </Text>
        )}
      </Stack>
    </Stack>
  );
}
