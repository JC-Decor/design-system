import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { CodeBlock } from '../../../kit/CodeBlock';

export default function ResourceStatePage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="ResourceState"
      source="connect"
      sourcePath="packages/connect-ui/src/components/ResourceState"
      description="Orquestra os estados de um recurso remoto — carregando, erro, sem acesso, vazio e conteúdo — com textos em português e botão de tentar de novo."
      importCode={`import { ResourceState, describeResourceError } from '@jcdecor/connect-ui';`}
    >
      <Section title="Estados">
        <P>
          Carregando mostra um SkeletonBlock dentro de um Card; erro mostra a mensagem em português primeiro e o detalhe do backend depois, com a referência
          (<code>correlationId</code>) e “Tentar novamente”; 401/403 viram “Acesso restrito” sem retry; vazio usa <code>emptyTitle</code>/<code>emptyDescription</code>.
        </P>
        <Demo id="cn-resource-state/states" />
      </Section>
      <Section title="Formatando erros da sua API">
        <P>O formatador padrão (<code>describeResourceError</code>) lê <code>status</code>, <code>message</code> e <code>correlationId</code>. Para regras próprias, passe <code>formatError</code>.</P>
        <Demo id="cn-resource-state/format-error" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'isLoading', type: 'boolean', required: true, description: 'Carregando.' },
            { name: 'error', type: 'unknown', required: true, description: 'Erro (qualquer valor truthy).' },
            { name: 'data', type: 'T | undefined', required: true, description: 'Dados.' },
            { name: 'children', type: '(data: T) => ReactNode', required: true, description: 'Renderiza os dados.' },
            { name: 'isEmpty', type: '(data) => boolean', description: 'Quando conta como vazio.' },
            { name: 'onRetry', type: '() => void', description: 'Mostra “Tentar novamente”.' },
            { name: 'loadingVariant', type: "'card' | 'list' | 'table' | 'profile' | 'chart'", default: "'card'", description: 'Formato do esqueleto.' },
            { name: 'loadingRows', type: 'number', default: '3', description: 'Linhas do esqueleto.' },
            { name: 'emptyTitle / emptyDescription', type: 'string', description: 'Textos do vazio.' },
            { name: 'formatError', type: '(error) => ResourceErrorInfo', default: 'describeResourceError', description: 'Converte o erro em { title, description, technical?, blocked? }.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <P>
          Mesmas props do connect-jc. O <code>formatUserError</code> do app não vem junto: para manter as mensagens por código da API, passe um <code>formatError</code> que adapte o resultado de <code>formatUserError</code>:
        </P>
        <CodeBlock language="tsx" code={`formatError={(e) => {
  const f = formatUserError(e);
  return {
    title: f.title,
    description: joinUserErrorText(f),
    technical: f.technical,
    blocked: f.kind === 'unauthorized' || f.kind === 'forbidden',
  };
}}`} />
      </Section>
    </DocPage>
  );
}
