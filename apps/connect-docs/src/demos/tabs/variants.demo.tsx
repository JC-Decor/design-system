import { Stack, Tabs, Text } from '@jcdecor/connect-ui';

const variants = ['default', 'outline', 'pills'] as const;

export default function Demo() {
  return (
    <Stack gap="xl">
      {variants.map((variant) => (
        <div key={variant}>
          <Text fz="xs" fw={600} c="var(--ds-text-3)" mb="xs">
            variant="{variant}"
          </Text>
          <Tabs variant={variant} defaultValue="equipe">
            <Tabs.List>
              <Tabs.Tab value="equipe">Minha equipe</Tabs.Tab>
              <Tabs.Tab value="metas">Metas</Tabs.Tab>
              <Tabs.Tab value="feedbacks">Feedbacks</Tabs.Tab>
              <Tabs.Tab value="pdi" disabled>
                PDI (em breve)
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </div>
      ))}
    </Stack>
  );
}
