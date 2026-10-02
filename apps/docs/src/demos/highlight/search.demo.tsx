import { useState } from 'react';
import { Highlight, Stack, Text, TextInput } from '@jcdecor/ui';
import { IconSearch } from '@tabler/icons-react';

const produtos = [
  'Piso vinílico Carvalho Natural — click, 5 mm',
  'Piso laminado Carvalho Europeu — 7 mm',
  'Painel ripado Freijó — MDF 18 mm',
  'Papel de parede Linho Bege — rolo 10 m',
  'Rodapé de poliestireno branco — 10 cm',
];

export default function Demo() {
  const [busca, setBusca] = useState('carvalho');

  return (
    <Stack gap="md" w="100%" maw={480}>
      <TextInput
        value={busca}
        onChange={(e) => setBusca(e.currentTarget.value)}
        placeholder="Buscar produtos"
        leftSection={<IconSearch size={16} />}
        aria-label="Buscar produtos"
      />
      <Stack gap="xs">
        {produtos.map((nome) => (
          <Highlight key={nome} highlight={busca} fz="sm">
            {nome}
          </Highlight>
        ))}
        {busca && produtos.every((nome) => !nome.toLowerCase().includes(busca.toLowerCase())) && (
          <Text fz="sm" c="var(--ds-text-3)">
            Nenhum produto encontrado para “{busca}”.
          </Text>
        )}
      </Stack>
    </Stack>
  );
}
