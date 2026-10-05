import { MaskInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function MaskInputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="MaskInput"
      source="mantine"
      mantineName="mask-input"
      description="Campo com máscara de formato fixo para CEP, CPF, CNPJ, telefone e datas. A máscara guia a digitação e evita erros de formato."
      importCode={`import { MaskInput } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={MaskInput}
          name="MaskInput"
          previewWidth={320}
          controls={[
            { prop: 'mask', type: 'select', data: ['99999-999', '999.999.999-99', '99.999.999/9999-99', '(99) 99999-9999', '99/99/9999'], initialValue: '99999-999' },
            { prop: 'label', type: 'string', initialValue: 'CEP' },
            { prop: 'placeholder', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'alwaysShowMask', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Documentos brasileiros">
        <P>
          O token <code>9</code> aceita um dígito; os demais caracteres da máscara são literais. Use <code>inputMode="numeric"</code> para abrir o
          teclado numérico no celular.
        </P>
        <Demo id="mask-input/documents" />
        <PropsTable
          rows={[
            { name: '9', type: '[0-9]', description: 'Dígito' },
            { name: 'a', type: '[A-Za-z]', description: 'Letra' },
            { name: 'A', type: '[A-Z]', description: 'Letra maiúscula' },
            { name: '*', type: '[A-Za-z0-9]', description: 'Letra ou dígito' },
            { name: '#', type: '[-+0-9]', description: 'Dígito ou sinal' },
          ]}
        />
      </Section>

      <Section title="Telefone com 8 ou 9 dígitos">
        <P>
          A função <code>modify</code> troca a máscara conforme o valor digitado — aqui, de fixo para celular quando passam de 10 dígitos.
        </P>
        <Demo id="mask-input/phone" />
      </Section>

      <Section title="Valor bruto e onComplete">
        <P>
          <code>onChangeRaw</code> entrega só os caracteres digitados (sem pontuação), pronto para enviar à API. <code>onComplete</code> dispara quando
          todos os espaços estão preenchidos — momento ideal para buscar o endereço pelo CEP.
          <OnlyFor framework="vue">
            {' '}
            No Vue, são os eventos <code>@change-raw</code> e <code>@complete</code>.
          </OnlyFor>
        </P>
        <Demo id="mask-input/raw-value" />
      </Section>

      <Section title="Letras e transformações">
        <Demo id="mask-input/custom-tokens" />
      </Section>

      <Section title="No tema JC">
        <P>
          Herda o visual de <code>Input</code> e o tamanho padrão <code>md</code> (adicionado à lista de campos do tema). Nenhum estilo próprio.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'mask', type: 'string | (string | RegExp)[]', required: true, description: 'Padrão da máscara.' },
            { name: 'tokens', type: 'Record<string, RegExp>', description: 'Adiciona ou substitui tokens.' },
            { name: 'modify', type: '(value) => Partial<options>', description: 'Troca máscara/opções a cada tecla.' },
            { name: 'onChangeRaw', vueName: '@change-raw', type: '(raw, masked) => void', description: 'Valor sem a máscara.' },
            { name: 'onComplete', vueName: '@complete', type: '(masked, raw) => void', description: 'Todos os espaços preenchidos.' },
            { name: 'alwaysShowMask', type: 'boolean', default: 'false', description: 'Mostra a máscara mesmo vazio.' },
            { name: 'slotChar', type: 'string | null', default: '"_"', description: 'Caractere dos espaços vazios.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mostre o formato esperado no placeholder ou no <code>description</code>. Aceite colar valores já formatados. Para valores numéricos de
          verdade (preço, m²) use <code>NumberInput</code>.
        </P>
      </Section>
    </DocPage>
  );
}
