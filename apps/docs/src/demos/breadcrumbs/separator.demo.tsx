import { Anchor, Breadcrumbs, Stack, Text } from '@jcdecor/ui';
import { IconChevronRight } from '@tabler/icons-react';

const path = ['Início', 'Papel de parede', 'Botânica'];

function Crumbs() {
  return [
    ...path.map((title) => (
      <Anchor href="#" key={title} fz="sm">
        {title}
      </Anchor>
    )),
    <Text key="atual" fz="sm" c="var(--ds-text-3)" aria-current="page">
      Folhagem Verde 0,53 × 10 m
    </Text>,
  ];
}

export default function Demo() {
  return (
    <Stack gap="md">
      <Breadcrumbs separator={<IconChevronRight size={14} />}>{Crumbs()}</Breadcrumbs>
      <Breadcrumbs separator="›" separatorMargin="xs">
        {Crumbs()}
      </Breadcrumbs>
      <Breadcrumbs separator="·" separatorMargin="sm">
        {Crumbs()}
      </Breadcrumbs>
    </Stack>
  );
}
