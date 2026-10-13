import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function Page() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="FormModal"
      source="connect"
      sourcePath="packages/connect-ui/src/components/FormModal"
      description="Modal de formulário (.scl-modal do Connect): quase tela cheia, cabeçalho com título e subtítulo, corpo rolável em grade de campos e rodapé fixo com as ações."
      importCode={`import { FormModal } from '@jcdecor/connect-ui';`}
    >
      <Section title="Exemplo">
        <P>Com <code>onSubmit</code>, corpo e rodapé ficam num <code>&lt;form&gt;</code> e um botão <code>type=&quot;submit&quot;</code> no rodapé envia. O subtítulo vira a descrição acessível do diálogo. Esc e clique fora fecham.</P>
        <Demo id="cn-form-modal/basic" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'open', type: 'boolean', required: true, description: 'Controla a abertura.' },
            { name: 'onOpenChange', type: '(open: boolean) => void', required: true, description: 'Chamado com false ao fechar.' },
            { name: 'title', type: 'ReactNode', required: true, description: 'Título (18/800); nomeia o diálogo.' },
            { name: 'description', type: 'ReactNode', description: 'Subtítulo; vira a descrição acessível.' },
            { name: 'footer', type: 'ReactNode', description: 'Rodapé fixo e tingido com as ações; empilha no celular.' },
            { name: 'size', type: "'overlay' | number | string", default: "'overlay'", description: 'overlay = --cn-overlay-w × --cn-overlay-h; número/string = largura com altura pelo conteúdo.' },
            { name: 'layout', type: "'grid' | 'stack'", default: "'grid'", description: 'grid = regras do FormGrid; stack = um campo abaixo do outro.' },
            { name: 'minColWidth', type: 'number', default: '260', description: 'Largura mínima das colunas no grid.' },
            { name: 'onSubmit', type: '(event) => void', description: 'Envolve corpo e rodapé num form.' },
            { name: 'withCloseButton', type: 'boolean', default: 'true', description: 'Botão de fechar no cabeçalho.' },
            { name: 'closeLabel', type: 'string', default: "'Fechar'", description: 'aria-label do botão de fechar.' },
            { name: '...ModalRootProps', type: 'ModalRootProps', description: 'Demais props do Modal.Root (closeOnClickOutside, zIndex…).' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
