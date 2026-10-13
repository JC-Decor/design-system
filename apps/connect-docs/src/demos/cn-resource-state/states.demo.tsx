import { useState } from 'react';
import { Card, CardHeader, ResourceState, SegmentedControl, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

type Estado = 'carregando' | 'erro' | 'sem-acesso' | 'vazio' | 'dados';

const erros = {
  erro: Object.assign(new Error('Saldo de férias indisponível.'), { status: 500, correlationId: 'a1b2-c3' }),
  'sem-acesso': { status: 403, message: 'Forbidden' },
};

export default function Demo() {
  const [estado, setEstado] = useState<Estado>('dados');
  const data = estado === 'vazio' ? [] : estado === 'dados' ? ['Ana Souza · 12 dias', 'Rafael Moura · 30 dias'] : undefined;

  return (
    <Stack>
      <SegmentedControl
        value={estado}
        onChange={(v) => setEstado(v as Estado)}
        data={['carregando', 'erro', 'sem-acesso', 'vazio', 'dados']}
      />
      <ResourceState
        isLoading={estado === 'carregando'}
        error={estado === 'erro' || estado === 'sem-acesso' ? erros[estado] : null}
        data={data}
        isEmpty={(d) => !d?.length}
        onRetry={() => setEstado('carregando')}
        loadingVariant="list"
        emptyTitle="Ninguém de férias"
        emptyDescription="Nenhum colaborador da equipe está de férias neste mês."
      >
        {(ferias) => (
          <Card>
            <CardHeader title="Férias em outubro" />
            {ferias.map((linha) => (
              <Text key={linha} fz="sm" mt="xs">{linha}</Text>
            ))}
          </Card>
        )}
      </ResourceState>
    </Stack>
  );
}
