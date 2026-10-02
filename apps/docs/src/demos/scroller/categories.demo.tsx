import { Chip, Group, Scroller } from '@jcdecor/ui';

const categorias = [
  'Pisos vinílicos', 'Pisos laminados', 'Papel de parede', 'Painel ripado', 'Grama sintética', 'Cortinas', 'Persianas',
  'Tatames', 'Carpetes', 'Rodapés', 'Tapetes', 'Adesivos de parede',
];

export default function Demo() {
  return (
    <Scroller w="100%" edgeGradientColor="var(--ds-surface)">
      <Chip.Group defaultValue="Pisos vinílicos">
        <Group gap="xs" wrap="nowrap">
          {categorias.map((c) => (
            <Chip key={c} value={c} size="sm">
              {c}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
    </Scroller>
  );
}
