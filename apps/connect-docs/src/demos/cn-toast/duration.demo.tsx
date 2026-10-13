import { useState } from 'react';
import { Button, Group, toast } from '@jcdecor/connect-ui';

export default function Demo() {
  const [id, setId] = useState<string>();

  return (
    <Group justify="center">
      <Button variant="ghost" onClick={() => toast.success('Salvo! (2 segundos)', 2000)}>
        Duração curta
      </Button>
      <Button variant="ghost" onClick={() => setId(toast.info('Importando 248 colaboradores… (fica até fechar)', 0))}>
        Sem fechar sozinho
      </Button>
      <Button variant="outline" disabled={!id} onClick={() => id && toast.dismiss(id)}>
        Fechar pelo id
      </Button>
    </Group>
  );
}
