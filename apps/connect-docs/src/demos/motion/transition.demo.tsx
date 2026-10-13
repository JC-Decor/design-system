import { Card, Group, Text, Icon } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Group>
      {['Rápido', 'Padrão'].map((label, i) => (
        <Card
          key={label}
          w={200}
          style={{
            cursor: 'pointer',
            // --cn-t = 180ms + ease padrão do Connect; 120ms para micro-interações
            transition: i === 0 ? 'transform 120ms cubic-bezier(.2,.7,.2,1), box-shadow 120ms cubic-bezier(.2,.7,.2,1)' : 'transform var(--cn-t), box-shadow var(--cn-t)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'var(--ds-shadow-md)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = '';
          }}
        >
          <Icon name="zap" size={18} />
          <Text fw={700} mt="xs">{label}</Text>
          <Text fz="xs" c="var(--ds-text-3)">{i === 0 ? '120ms' : 'var(--cn-t) · 180ms'}</Text>
        </Card>
      ))}
    </Group>
  );
}
