import { Kbd } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function KbdPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Kbd"
      source="mantine"
      mantineName="kbd"
      description="Representação de teclas para documentar atalhos de teclado no painel do colaborador e na busca."
      importCode={`import { Kbd } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Kbd}
          name="Kbd"
          controls={[
            { prop: 'size', type: 'size', initialValue: 'sm' },
            { prop: 'children', type: 'string', initialValue: 'Ctrl' },
          ]}
        />
      </Section>

      <Section title="Atalhos">
        <Demo id="kbd/shortcuts" />
      </Section>

      <Section title="No texto e tamanhos">
        <Demo id="kbd/inline" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'root', type: 'classNames', description: 'Fundo --ds-surface-2, texto --ds-text-2, borda --ds-border-soft com base --ds-border (efeito de tecla), raio 6px, DM Mono, peso 600.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable rows={[{ name: 'size', type: 'MantineSize | number', default: "'sm'", description: 'Tamanho da fonte (12px no sm).' }]} />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use um <code>Kbd</code> por tecla e separe com “+”. Mostre <code>⌘</code> no macOS e <code>Ctrl</code> nos demais sistemas. Atalhos
          são complementares: toda ação deve ter também um botão visível.
        </P>
      </Section>
    </DocPage>
  );
}
