import { Button, SectionHeader, Stack, Tag } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export default function Demo() {
  return (
    <Stack gap="xl">
      <SectionHeader
        title="Treinamentos"
        badge={<Tag tone="lavender">4 obrigatórios</Tag>}
        description="Trilhas indicadas pelo seu gestor e cursos de integração."
        actions={<Button>Nova trilha</Button>}
      />
      <SectionHeader
        title="Minha equipe"
        description="12 pessoas · Comercial"
        illustration="meetTeam"
        actions={<Button variant="ghost">Ver organograma</Button>}
      />
      <SectionHeader compact title="Documentos recentes" illustration="document" />
    </Stack>
  );
}
