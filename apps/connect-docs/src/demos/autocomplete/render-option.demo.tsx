import { Autocomplete, Avatar, Group, Text, type AutocompleteProps } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const pessoas: Record<string, { cargo: string; color: string }> = {
  'Ana Ribeiro': { cargo: 'Business Partner · Pessoas', color: 'lavender' },
  'Bruno Alves': { cargo: 'Analista de DP · Pessoas', color: 'blue' },
  'Carla Nogueira': { cargo: 'Desenvolvedora · Tecnologia', color: 'green' },
  'Diego Martins': { cargo: 'Supervisor · Operações', color: 'yellow' },
};

const renderOption: AutocompleteProps['renderOption'] = ({ option }) => (
  <Group gap="sm" wrap="nowrap">
    <Avatar name={option.value} color={pessoas[option.value].color} size={28} radius="xl" />
    <div>
      <Text fz="sm" fw={500}>
        {option.value}
      </Text>
      <Text fz="xs" c="var(--ds-text-3)">
        {pessoas[option.value].cargo}
      </Text>
    </div>
  </Group>
);

export default function Demo() {
  return <Autocomplete label="Mencionar colaborador" placeholder="Comece a digitar um nome" data={Object.keys(pessoas)} renderOption={renderOption} />;
}
