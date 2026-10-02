import { PageHeader, Button, Tag } from '@jcdecor/ui';

export default function Demo() {
  return (
    <PageHeader
      mb={0}
      breadcrumbs={[
        { label: 'Início', href: '#' },
        { label: 'Produtos', href: '#' },
        { label: 'Piso vinílico Carvalho Natural' },
      ]}
      title="Piso vinílico Carvalho Natural"
      description="SKU 505-CN · Réguas de 2 mm, caixa com 3,34 m²."
      actions={
        <>
          <Tag tone="success" withIcon>
            Em estoque
          </Tag>
          <Button variant="outline">Editar produto</Button>
        </>
      }
    />
  );
}
