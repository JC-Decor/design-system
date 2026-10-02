import { Chip, Flex } from '@jcdecor/ui';

const filtros = ['Pisos vinílicos', 'Papel de parede', 'Painel ripado', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes', 'Rodapés'];

export default function Demo() {
  return (
    <Flex wrap="wrap" gap="xs" maw={420}>
      {filtros.map((filtro, index) => (
        <Chip key={filtro} defaultChecked={index < 2} size="sm">
          {filtro}
        </Chip>
      ))}
    </Flex>
  );
}
