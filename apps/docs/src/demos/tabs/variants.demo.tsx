import { Stack, Tabs, Text } from '@jcdecor/ui';

const variants = ['default', 'outline', 'pills'] as const;

export default function Demo() {
  return (
    <Stack gap="xl">
      {variants.map((variant) => (
        <div key={variant}>
          <Text fz="xs" fw={600} c="var(--ds-text-3)" mb="xs">
            variant="{variant}"
          </Text>
          <Tabs variant={variant} defaultValue="pisos">
            <Tabs.List>
              <Tabs.Tab value="pisos">Pisos</Tabs.Tab>
              <Tabs.Tab value="papel">Papel de parede</Tabs.Tab>
              <Tabs.Tab value="cortinas">Cortinas</Tabs.Tab>
              <Tabs.Tab value="paineis" disabled>
                Painéis (em breve)
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </div>
      ))}
    </Stack>
  );
}
