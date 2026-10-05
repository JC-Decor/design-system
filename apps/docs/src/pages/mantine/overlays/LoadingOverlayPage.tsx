import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function LoadingOverlayPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="LoadingOverlay"
      source="mantine"
      mantineName="loading-overlay"
      description="Cobre um bloco com um véu e um loader enquanto ele salva ou carrega, impedindo interações duplicadas."
      importCode={`import { LoadingOverlay } from '@jcdecor/ui';`}
    >
      <Section title="Formulário salvando">
        <P>
          O pai precisa de <code>pos="relative"</code>. Clique em <b>Salvar alterações</b>: o formulário fica coberto por 2 segundos e o botão mostra{' '}
          <code>loading</code>.
        </P>
        <Demo id="loading-overlay/saving-form" />
      </Section>

      <Section title="Loader personalizado">
        <P>
          <code>loaderProps.children</code> substitui o spinner — útil para explicar processos mais longos.
        </P>
        <Demo id="loading-overlay/custom-loader" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'overlayProps', type: 'defaultProps', default: '{ backgroundOpacity: 0.75, blur: 1 }', description: 'Véu na cor da superfície com leve desfoque; no escuro usa o neutro escuro do tema.' },
            { name: 'loader', type: 'herdado', default: "type 'oval'", description: 'Loader do tema, na cor primária.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'visible', type: 'boolean', description: 'Mostra o overlay.' },
            { name: 'zIndex', type: 'number', default: '400', description: 'Diminua (ex.: 10) para não passar por cima de dropdowns da página.' },
            { name: 'overlayProps', type: 'OverlayProps', description: 'Cor, opacidade, blur e radius do véu.' },
            { name: 'loaderProps', type: 'LoaderProps', description: 'Props do Loader; children substitui o spinner.', vueDescription: 'Props do Loader; para trocar o spinner, registre um componente em loaders e escolha-o com type.' },
            { name: 'transitionProps', type: 'TransitionOverride', default: '{ duration: 0 }', description: 'Animação de entrada/saída.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Cubra só o bloco afetado, nunca a página inteira. Para ações com o botão, prefira o <code>loading</code> do próprio Button; use o overlay
          quando o conteúdo inteiro não pode ser editado durante a operação. Para carregamento inicial de listas, use Skeleton.
        </P>
      </Section>
    </DocPage>
  );
}
