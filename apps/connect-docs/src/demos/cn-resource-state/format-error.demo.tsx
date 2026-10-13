import { ResourceState, type ResourceErrorInfo } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

// Traduza os erros da sua API para títulos e mensagens em português
function formatarErro(error: unknown): ResourceErrorInfo {
  const code = (error as { code?: string }).code;
  if (code === 'PERIODO_FECHADO') {
    return { title: 'Período de ponto fechado', description: 'O fechamento de outubro já foi enviado à folha.' };
  }
  return { title: 'Não foi possível carregar', description: 'Tente novamente em instantes.' };
}

export default function Demo() {
  return (
    <ResourceState isLoading={false} error={{ code: 'PERIODO_FECHADO' }} data={undefined} formatError={formatarErro} onRetry={() => {}}>
      {() => null}
    </ResourceState>
  );
}
