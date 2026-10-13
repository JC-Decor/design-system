import { Button, Card, type CardProps } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import { EmptyStatePanel } from '../EmptyStatePanel';
import { SkeletonBlock, type SkeletonBlockVariant } from '../SkeletonBlock';
import classes from './ResourceState.module.css';

export interface ResourceErrorInfo {
  /** Título em pt-BR (ex.: "Não foi possível carregar") */
  title: string;
  /** Mensagem amigável primeiro; detalhe do backend depois */
  description: string;
  /** Linha técnica discreta (ex.: "ref: corr-1") */
  technical?: string;
  /** Sessão/permissão: mostra "Acesso restrito" e não oferece "Tentar novamente" */
  blocked?: boolean;
}

const KIND_COPY = {
  validation: { title: 'Não foi possível validar os dados', message: 'Revise as informações e tente novamente.' },
  notFound: { title: 'Não encontrado', message: 'O recurso solicitado não existe ou não está mais disponível.' },
  conflict: { title: 'Não foi possível salvar', message: 'Houve um conflito com os dados atuais. Atualize e tente novamente.' },
  rateLimit: { title: 'Muitas tentativas', message: 'Aguarde um momento e tente novamente.' },
  unavailable: { title: 'Serviço indisponível', message: 'Tente novamente em instantes.' },
  server: { title: 'Não foi possível carregar', message: 'Ocorreu um erro inesperado. Tente novamente.' },
  network: { title: 'Sem conexão', message: 'Não foi possível contatar o servidor. Verifique sua conexão.' },
  unknown: { title: 'Não foi possível carregar', message: 'Não foi possível carregar os dados.' },
};

function kindOf(status: number | undefined, error: unknown): keyof typeof KIND_COPY {
  if (status === 404) return 'notFound';
  if (status === 409) return 'conflict';
  if (status === 429) return 'rateLimit';
  if (status === 408 || status === 502 || status === 503 || status === 504) return 'unavailable';
  if (status !== undefined && status >= 400 && status < 500) return 'validation';
  if (status !== undefined && status >= 500) return 'server';
  if (error instanceof TypeError) return 'network';
  return 'unknown';
}

/**
 * Formatador padrão de erros: lê `status`, `message` e `correlationId` do erro (formato do ApiError do Connect).
 * Sempre começa com a mensagem em português e só depois anexa o detalhe vindo do backend.
 */
export function describeResourceError(error: unknown): ResourceErrorInfo {
  const e = (typeof error === 'object' && error !== null ? error : {}) as { status?: unknown; message?: unknown; correlationId?: unknown };
  const status = typeof e.status === 'number' ? e.status : undefined;
  if (status === 401 || status === 403) {
    return { title: 'Acesso restrito', description: 'Sua sessão ou permissão não libera esta visualização.', blocked: true };
  }
  const copy = KIND_COPY[kindOf(status, error)];
  const detail = typeof e.message === 'string' ? e.message.trim() : typeof error === 'string' ? error : '';
  return {
    title: copy.title,
    description: detail && detail !== copy.message ? `${copy.message} ${detail}` : copy.message,
    technical: typeof e.correlationId === 'string' && e.correlationId ? `ref: ${e.correlationId}` : undefined,
  };
}

export interface ResourceStateProps<T> {
  isLoading: boolean;
  error: unknown;
  data: T | undefined;
  /** Diz quando `data` conta como vazio (ex.: `d => !d?.length`) */
  isEmpty?: (data: T | undefined) => boolean;
  /** Mostra "Tentar novamente" no erro (exceto 401/403) */
  onRetry?: () => void;
  /** Formato do esqueleto @default 'card' */
  loadingVariant?: Exclude<SkeletonBlockVariant, 'text'>;
  /** @default 3 */
  loadingRows?: number;
  /** @default 'Nenhum dado encontrado' */
  emptyTitle?: string;
  /** @default 'Quando houver dados disponíveis, eles aparecerão aqui.' */
  emptyDescription?: string;
  /** Converte o erro em textos pt-BR @default describeResourceError */
  formatError?: (error: unknown) => ResourceErrorInfo;
  /** Props do Card que envolve o esqueleto */
  loadingCardProps?: CardProps;
  /** Renderiza os dados quando carregados e não vazios */
  children: (data: T) => React.ReactNode;
}

/** Orquestra carregando → erro → vazio → conteúdo de um recurso remoto, com textos pt-BR e retry. */
export function ResourceState<T>({
  isLoading,
  error,
  data,
  isEmpty,
  onRetry,
  loadingVariant = 'card',
  loadingRows = 3,
  emptyTitle = 'Nenhum dado encontrado',
  emptyDescription = 'Quando houver dados disponíveis, eles aparecerão aqui.',
  formatError = describeResourceError,
  loadingCardProps,
  children,
}: ResourceStateProps<T>) {
  if (isLoading) {
    return (
      <Card {...loadingCardProps}>
        <SkeletonBlock variant={loadingVariant} rows={loadingRows} />
      </Card>
    );
  }

  if (error) {
    const info = formatError(error);
    return (
      <EmptyStatePanel
        variant={info.blocked ? 'permission' : 'error'}
        title={info.title}
        description={info.description}
        action={
          info.blocked ? undefined : (
            <>
              {info.technical && <p className={classes.technical}>{info.technical}</p>}
              {onRetry && (
                <Button variant="outline" leftSection={<IconRefresh size={15} stroke={1.8} />} onClick={onRetry} mt={6}>
                  Tentar novamente
                </Button>
              )}
            </>
          )
        }
      />
    );
  }

  if (data === undefined || data === null || isEmpty?.(data)) {
    return <EmptyStatePanel variant="empty" title={emptyTitle} description={emptyDescription} />;
  }

  return <>{children(data)}</>;
}
