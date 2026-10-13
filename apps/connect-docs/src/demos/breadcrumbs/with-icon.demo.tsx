import { Anchor, Breadcrumbs, Icon, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Breadcrumbs separator={<Icon name="chev-r" size={14} />}>
      <Anchor href="#" fz="sm" aria-label="Início" display="flex">
        <Icon name="home" size={16} />
      </Anchor>
      <Anchor href="#" fz="sm">
        Gestão
      </Anchor>
      <Anchor href="#" fz="sm">
        Solicitações
      </Anchor>
      <Text fz="sm" c="var(--ds-text-3)" aria-current="page">
        Férias #2048
      </Text>
    </Breadcrumbs>
  );
}
