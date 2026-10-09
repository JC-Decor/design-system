import { useState } from 'react';
import { SimpleGrid, Text, ThemeIcon, UnstyledButton } from '@jcdecor/ui';
import { IconBuildingStore, IconTruck } from '@tabler/icons-react';
import classes from './option-cards.module.css';

const opcoes = [
  { value: 'entrega', titulo: 'Receber em casa', descricao: 'Em até 5 dias úteis · R$ 29,90', icon: IconTruck },
  { value: 'retirada', titulo: 'Retirar na loja', descricao: 'Pronto em 2 horas · Grátis', icon: IconBuildingStore },
];

export default function Demo() {
  const [value, setValue] = useState('entrega');

  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} role="radiogroup" aria-label="Forma de entrega">
      {opcoes.map(({ value: v, titulo, descricao, icon: Icon }) => (
        <UnstyledButton
          key={v}
          className={classes.card}
          role="radio"
          aria-checked={value === v}
          data-checked={value === v || undefined}
          onClick={() => setValue(v)}
        >
          <ThemeIcon variant="light" size="lg" radius="sm">
            <Icon size={20} />
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
