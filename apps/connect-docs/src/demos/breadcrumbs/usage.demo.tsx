import { Anchor, Breadcrumbs, Text } from '@jcdecor/connect-ui';

const items = [
  { title: 'Início', href: '#' },
  { title: 'Colaboradores', href: '#colaboradores' },
];

export default function Demo() {
  return (
    <Breadcrumbs>
      {items.map((item) => (
        <Anchor href={item.href} key={item.title} fz="sm">
          {item.title}
        </Anchor>
      ))}
      <Text fz="sm" c="var(--ds-text-3)" aria-current="page">
        Marina Souza
      </Text>
    </Breadcrumbs>
  );
}
