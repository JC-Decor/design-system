import { Divider, Stack } from '@jcdecor/ui';
import { IconSearch } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Stack gap="lg" w="100%">
      <Divider label="ou continue com" labelPosition="center" />
      <Divider label="Itens do pedido" labelPosition="left" />
      <Divider
        label={
          <>
            <IconSearch size={12} />
            <span style={{ marginLeft: 4 }}>Resultados relacionados</span>
          </>
        }
        labelPosition="right"
      />
    </Stack>
  );
}
