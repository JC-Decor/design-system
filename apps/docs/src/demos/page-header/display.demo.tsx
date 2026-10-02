import { PageHeader, Button } from '@jcdecor/ui';

export default function Demo() {
  return (
    <PageHeader
      mb={0}
      size="display"
      kicker="JC Decor · DS"
      title="Design System"
      description="Tokens, componentes e padrões para construir as lojas e os painéis da JC Decor."
      actions={<Button variant="accent">Começar</Button>}
    />
  );
}
