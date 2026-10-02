import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function FileButtonPage() {
  return (
    <DocPage
      kicker="Mantine · Buttons"
      title="FileButton"
      source="mantine"
      mantineName="file-button"
      description="Abre o seletor de arquivos a partir de qualquer botão. Usado no envio de fotos do ambiente para orçamento."
      importCode={`import { FileButton } from '@jcdecor/ui';`}
    >
      <Section title="Uma foto">
        <P>
          <code>children</code> é uma função que recebe as props do gatilho; espalhe-as no seu <code>Button</code>. Restrinja os tipos com{' '}
          <code>accept</code>.
        </P>
        <Demo id="file-button/basic" />
      </Section>

      <Section title="Várias fotos e reset">
        <P>
          Com <code>multiple</code>, <code>onChange</code> recebe <code>File[]</code>. Use <code>resetRef</code> para limpar o input e permitir
          escolher o mesmo arquivo de novo.
        </P>
        <Demo id="file-button/multiple" />
      </Section>

      <Section title="No tema JC">
        <P>Sem visual próprio: usa o <code>Button</code> da marca. Para uma área de arrastar e soltar, use o <code>Dropzone</code>.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'onChange', type: '(file: File | null | File[]) => void', required: true, description: 'Arquivo(s) escolhido(s).' },
            { name: 'children', type: '(props) => ReactNode', required: true, description: 'Renderiza o gatilho.' },
            { name: 'accept', type: 'string', description: 'Tipos aceitos, ex.: "image/png,image/jpeg".' },
            { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite vários arquivos.' },
            { name: 'resetRef', type: 'Ref<() => void>', description: 'Função para limpar o input.' },
            { name: 'capture', type: "'user' | 'environment'", description: 'No celular, abre direto a câmera.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre mostre o que foi selecionado (nome, contagem ou miniatura) e valide tamanho e tipo antes do envio — <code>accept</code> é só
          uma sugestão para o navegador.
        </P>
      </Section>
    </DocPage>
  );
}
