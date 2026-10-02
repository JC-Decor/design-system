import { useState } from 'react';
import { ActionIcon, Badge, Group, Menu, Paper, Tooltip } from '@jcdecor/ui';
import { ChatComposer } from '@jcdecor/ui/chat';
import { IconBolt } from '@tabler/icons-react';

const quickReplies = [
  'Qual o prazo de entrega para o seu CEP?',
  'Pode me enviar as medidas do ambiente?',
  'O pedido #48213 já está em separação.',
  'Pagando no Pix você ganha 5% de desconto.',
];

export default function Demo() {
  const [value, setValue] = useState('');
  return (
    <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
      <Group gap={6} px="sm" pt="sm" bg="var(--ds-surface)">
        {['Prazo de entrega', 'Medidas', 'Status do pedido', 'Pix'].map((label, index) => (
          <Badge
            key={label}
            component="button"
            variant="outline"
            color="horizon"
            style={{ cursor: 'pointer' }}
            onClick={() => setValue(quickReplies[index])}
          >
            {label}
          </Badge>
        ))}
      </Group>
      <ChatComposer
        value={value}
        onChange={setValue}
        onSend={() => {}}
        leftSection={
          <Menu position="top-start" withinPortal>
            <Menu.Target>
              <Tooltip label="Respostas rápidas">
                <ActionIcon size="lg" variant="subtle" aria-label="Respostas rápidas">
                  <IconBolt size={20} />
                </ActionIcon>
              </Tooltip>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Respostas rápidas</Menu.Label>
              {quickReplies.map((reply) => (
                <Menu.Item key={reply} onClick={() => setValue(reply)}>
                  {reply}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        }
      />
    </Paper>
  );
}
