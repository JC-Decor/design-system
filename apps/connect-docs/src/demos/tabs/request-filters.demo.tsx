import { Badge, Tabs } from '@jcdecor/connect-ui';

const filters = [
  { value: 'todas', label: 'Todas', count: 64 },
  { value: 'pendentes', label: 'Pendentes', count: 12 },
  { value: 'aprovadas', label: 'Aprovadas', count: 47 },
  { value: 'recusadas', label: 'Recusadas', count: 5 },
];

export default function Demo() {
  return (
    <Tabs variant="pills" defaultValue="pendentes">
      <Tabs.List>
        {filters.map((filter) => (
          <Tabs.Tab
            key={filter.value}
            value={filter.value}
            rightSection={
              <Badge size="sm" variant="light" color="ink">
                {filter.count}
              </Badge>
            }
          >
            {filter.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
