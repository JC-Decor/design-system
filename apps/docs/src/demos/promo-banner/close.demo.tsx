import { useState } from 'react';
import { PromoBanner, Button, Stack } from '@jcdecor/ui';

export default function Demo() {
  const [key, setKey] = useState(0);
  const [closed, setClosed] = useState(false);

  return (
    <Stack gap="sm" align="flex-start">
      <PromoBanner
        key={key}
        variant="obsidian"
        radius="md"
        w="100%"
        withCloseButton
        onClose={() => setClosed(true)}
        highlight="cupom: JCMAIO"
      >
        5% OFF na 1ª compra
      </PromoBanner>
      {closed && (
        <Button
          size="xs"
          variant="outline"
          onClick={() => {
            setClosed(false);
            setKey((k) => k + 1);
          }}
        >
          Mostrar banner de novo
        </Button>
      )}
    </Stack>
  );
}
