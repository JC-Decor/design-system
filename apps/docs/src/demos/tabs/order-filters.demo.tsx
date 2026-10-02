import { Badge, Tabs } from '@jcdecor/ui';

const filters = [
  { value: 'todos', label: 'Todos', count: 248 },
  { value: 'pendentes', label: 'Pendentes', count: 12 },
  { value: 'enviados', label: 'Enviados', count: 31 },
  { value: 'cancelados', label: 'Cancelados', count: 4 },
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
              <Badge size="sm" variant="light" color="gray">
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
