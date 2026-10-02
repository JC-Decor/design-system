import { useState } from 'react';
import { Checkbox, Stack } from '@jcdecor/ui';

const initial = [
  { label: 'Piso vinílico Carvalho (4 caixas)', checked: true, key: 'piso' },
  { label: 'Rodapé poliestireno branco (6 un.)', checked: false, key: 'rodape' },
  { label: 'Manta acústica 2mm (9 m²)', checked: true, key: 'manta' },
];

export default function Demo() {
  const [items, setItems] = useState(initial);
  const allChecked = items.every((item) => item.checked);
  const indeterminate = items.some((item) => item.checked) && !allChecked;

  return (
    <Stack gap="xs">
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Selecionar todos os itens"
        onChange={() => setItems((current) => current.map((item) => ({ ...item, checked: !allChecked })))}
      />
      <Stack gap="xs" ml={32}>
        {items.map((item, index) => (
          <Checkbox
            key={item.key}
            label={item.label}
            checked={item.checked}
            onChange={(event) => {
              const checked = event.currentTarget.checked;
              setItems((current) => current.map((it, i) => (i === index ? { ...it, checked } : it)));
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}
