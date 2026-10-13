import { useState } from 'react';
import { Icon, SimpleGrid, Text, ThemeIcon, UnstyledButton } from '@jcdecor/connect-ui';
import classes from './option-cards.module.css';

const opcoes = [
  { value: 'ferias', titulo: 'Férias', descricao: 'Saldo: 18 dias · aprovação do gestor', icon: 'palm' },
  { value: 'folga', titulo: 'Folga do banco de horas', descricao: 'Saldo: 12h30 · até 2 dias', icon: 'clock' },
];

export default function Demo() {
  const [value, setValue] = useState('ferias');

  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} role="radiogroup" aria-label="Tipo de ausência">
      {opcoes.map(({ value: v, titulo, descricao, icon }) => (
        <UnstyledButton
          key={v}
          className={classes.card}
          role="radio"
          aria-checked={value === v}
          data-checked={value === v || undefined}
          onClick={() => setValue(v)}
        >
          <ThemeIcon variant="light" size="lg" radius="sm">
            <Icon name={icon} size={18} />
          </ThemeIcon>
          <div>
            <Text fw={600}>{titulo}</Text>
            <Text fz="sm" c="var(--ds-text-2)">
              {descricao}
            </Text>
          </div>
        </UnstyledButton>
      ))}
    </SimpleGrid>
  );
}
