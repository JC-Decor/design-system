import { Anchor, Breadcrumbs, Icon, Stack, Text } from '@jcdecor/connect-ui';

const path = ['Início', 'Documentos', 'Políticas internas'];

function Crumbs() {
  return [
    ...path.map((title) => (
      <Anchor href="#" key={title} fz="sm">
        {title}
      </Anchor>
    )),
    <Text key="atual" fz="sm" c="var(--ds-text-3)" aria-current="page">
      Política de home office
    </Text>,
  ];
}

export default function Demo() {
  return (
    <Stack gap="md">
      <Breadcrumbs separator={<Icon name="chev-r" size={14} />}>{Crumbs()}</Breadcrumbs>
      <Breadcrumbs separator="›" separatorMargin="xs">
        {Crumbs()}
      </Breadcrumbs>
      <Breadcrumbs separator="·" separatorMargin="sm">
        {Crumbs()}
      </Breadcrumbs>
    </Stack>
  );
}
