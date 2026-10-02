import { Collaborator, GreekFrame, JcLogo, JcLogoAlt, SimpleGrid, SpartanHelmet, Paper, Stack, Text } from '@jcdecor/ui';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';
import { CodeBlock } from '../../kit/CodeBlock';

const COLORS = ['horizon', 'obsidian', 'electric', 'evergreen', 'danger', 'gray'];

const overview = [
  { name: 'JcLogo', node: <JcLogo size={36} /> },
  { name: 'JcLogoAlt', node: <JcLogoAlt size={44} /> },
  { name: 'SpartanHelmet', node: <SpartanHelmet size={52} /> },
  { name: 'GreekFrame', node: <GreekFrame size={56} /> },
  { name: 'Collaborator', node: <Collaborator size={48} /> },
];

const svgProps = [
  { name: 'size', type: 'number | string', default: 'varia', description: 'Altura do SVG; a largura segue a proporção.' },
  { name: 'title', type: 'string', description: 'Nome acessível (role="img"). Sem title o SVG é decorativo (aria-hidden).' },
  { name: '…BoxProps', type: 'style props', description: 'm, p, c, className, style, onClick… como qualquer componente Mantine.' },
];

export default function BrandPage() {
  return (
    <DocPage
      kicker="Marca"
      title="Logos e ilustrações"
      source="jc"
      sourcePath="packages/ui/src/brand"
      description="Logos e ilustrações da JC Decor como componentes React (SVG inline): nítidos em qualquer tamanho, recoloríveis com cores do tema e prontos para o tema claro e o escuro."
      importCode={`import { JcLogo, JcLogoAlt, SpartanHelmet, GreekFrame, Collaborator } from '@jcdecor/ui';
// ou, só a marca: import { JcLogo } from '@jcdecor/ui/brand';`}
    >
      <Section title="Visão geral">
        <SimpleGrid type="container" cols={{ base: 2, '560px': 5 }} spacing="md" mt="md">
          {overview.map((item) => (
            <Paper key={item.name} withBorder p="md" h={130}>
              <Stack align="center" justify="space-between" h="100%">
                <Stack justify="center" style={{ flex: 1 }}>{item.node}</Stack>
                <Text fz="xs" fw={600} ff="monospace">{item.name}</Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
        <P>
          Todas as cores aceitam nome do tema (<code>horizon</code>), tom (<code>electric.3</code>), qualquer cor CSS (<code>#fff</code>,{' '}
          <code>currentColor</code>, <code>var(--ds-text)</code>) ou ficam no padrão, que troca sozinho entre claro e escuro pelas variáveis{' '}
          <code>--jc-logo-*</code> e <code>--jc-art-*</code>.
        </P>
      </Section>

      <Section title="JcLogo">
        <P>Logo principal. O arquivo original (azul #0E36E3) é para fundos claros; a variação escura é branca.</P>
        <Configurator
          component={JcLogo}
          name="JcLogo"
          controls={[
            { prop: 'type', type: 'segmented', data: ['full', 'mark', 'wordmark'], initialValue: 'full' },
            { prop: 'variant', type: 'segmented', data: ['auto', 'light', 'dark'], initialValue: 'auto' },
            { prop: 'shieldColor', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'lettersColor', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'wordmarkColor', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'size', type: 'number', initialValue: 56, step: 4, min: 16 },
          ]}
        />
        <Demo id="brand/logo-variants" title="Fundo claro e fundo escuro" description={<>Use <code>variant</code> quando o fundo não acompanha o tema, como a barra navy do TopNav, que é escura nos dois temas.</>} />
        <Demo id="brand/logo-auto" title="Automático" description={<><code>variant="auto"</code> (padrão) segue o tema: azul no claro, branco no escuro.</>} />
        <Demo id="brand/logo-types" title="Versões" description="Completa, só o brasão (avatar, favicon, app) ou só o nome." />
        <Demo id="brand/logo-recolor" title="Recoloração" description={<>Cor única com <code>color</code>, ou por parte: <code>shieldColor</code>, <code>lettersColor</code>, <code>wordmarkColor</code>.</>} />
        <Demo id="brand/logo-nav" title="No TopNav" description={<>O <Link to="/componentes/top-nav">TopNav</Link> usa o logo branco como marca padrão.</>} />
        <PropsTable
          rows={[
            { name: 'type', type: "'full' | 'mark' | 'wordmark'", default: "'full'", description: 'Qual parte do logo renderizar (viewBox recortado).' },
            { name: 'variant', type: "'auto' | 'light' | 'dark'", default: "'auto'", description: 'Para qual fundo: segue o tema, fundo claro ou fundo escuro.' },
            { name: 'color', type: 'MantineColor | string', description: 'Cor única para o logo inteiro.' },
            { name: 'shieldColor / lettersColor / wordmarkColor', type: 'MantineColor | string', description: 'Cor por parte (sobrepõe color e variant).' },
            { name: 'title', type: 'string', default: "'JC Decor'", description: 'Nome acessível.' },
            ...svgProps.filter((r) => r.name !== 'title'),
          ]}
        />
      </Section>

      <Section title="JcLogoAlt">
        <P>Brasão JC. As letras são vazadas (mostram o fundo); passe <code>lettersColor</code> para preenchê-las.</P>
        <Configurator
          component={JcLogoAlt}
          name="JcLogoAlt"
          controls={[
            { prop: 'variant', type: 'segmented', data: ['auto', 'light', 'dark'], initialValue: 'auto' },
            { prop: 'color', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'lettersColor', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'strokeColor', type: 'color', data: ['obsidian', 'electric', 'horizon', 'none'], initialValue: '' },
            { prop: 'size', type: 'number', initialValue: 96, step: 8, min: 16 },
          ]}
        />
        <Demo id="brand/alt" title="Cores e letras" />
        <Demo id="brand/alt-sizes" title="Tamanhos" description={<>Em tamanhos pequenos (≤ 24px) use <code>strokeColor="none"</code> para o contorno não engrossar o desenho.</>} />
        <PropsTable
          rows={[
            { name: 'variant', type: "'auto' | 'light' | 'dark'", default: "'auto'", description: 'Cores padrão para o fundo.' },
            { name: 'color', type: 'MantineColor | string', description: 'Cor do brasão.' },
            { name: 'lettersColor', type: 'MantineColor | string', description: 'Preenche as letras JC (padrão: vazadas).' },
            { name: 'strokeColor', type: "MantineColor | string | 'none'", description: 'Cor do contorno; none remove.' },
            ...svgProps,
          ]}
        />
      </Section>

      <Section title="SpartanHelmet">
        <P>Elmo espartano em três camadas: traço (<code>color</code>), crista (<code>crestColor</code>) e metal (<code>faceColor</code>).</P>
        <Configurator
          component={SpartanHelmet}
          name="SpartanHelmet"
          controls={[
            { prop: 'color', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'crestColor', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'faceColor', type: 'color', data: ['electric', 'horizon', 'gray', 'transparent'], initialValue: '' },
            { prop: 'size', type: 'number', initialValue: 140, step: 8, min: 16 },
          ]}
        />
        <Demo id="brand/spartan" title="Combinações" />
        <Demo id="brand/spartan-mono" title="Monocromático" />
        <PropsTable
          rows={[
            { name: 'color', type: 'MantineColor | string', default: 'var(--jc-art-ink)', description: 'Traço e contornos (preto no claro, claro no escuro).' },
            { name: 'crestColor', type: 'MantineColor | string', default: 'var(--jc-art-primary)', description: 'Crista.' },
            { name: 'faceColor', type: 'MantineColor | string', default: 'var(--jc-art-paper)', description: 'Metal/face; transparent deixa vazado.' },
            ...svgProps,
          ]}
        />
      </Section>

      <Section title="GreekFrame">
        <P>Moldura circular com grega. Aceita qualquer conteúdo no centro, recortado em círculo: avatar, logo, número, ícone.</P>
        <Demo id="brand/frame" title="Com conteúdo" />
        <Demo id="brand/frame-team" title="Equipe" description="Fotos de colaboradores com a moldura da marca." />
        <PropsTable
          rows={[
            { name: 'color', type: 'MantineColor | string', default: 'var(--jc-art-primary)', description: 'Cor da grega e dos anéis.' },
            { name: 'fill', type: 'MantineColor | string', description: 'Fundo do círculo interno.' },
            { name: 'children', type: 'ReactNode', description: 'Conteúdo centralizado (área útil ≈ 79% do diâmetro).' },
            { name: 'size', type: 'number | string', default: '96', description: 'Largura e altura.' },
          ]}
        />
      </Section>

      <Section title="Collaborator">
        <P>Silhueta de colaborador/instalador. Usa <code>currentColor</code> por padrão, então funciona como um ícone dentro de botões e textos.</P>
        <Configurator
          component={Collaborator}
          name="Collaborator"
          controls={[
            { prop: 'color', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'headColor', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'bodyColor', type: 'color', data: COLORS, initialValue: '' },
            { prop: 'size', type: 'number', initialValue: 120, step: 8, min: 12 },
          ]}
        />
        <Demo id="brand/collaborator" title="Cores e contêineres" />
        <Demo id="brand/collaborator-inline" title="Como ícone" />
        <PropsTable
          rows={[
            { name: 'color', type: 'MantineColor | string', default: 'currentColor', description: 'Cor da figura.' },
            { name: 'headColor', type: 'MantineColor | string', description: 'Cabeça e boné.' },
            { name: 'bodyColor', type: 'MantineColor | string', description: 'Corpo.' },
            ...svgProps,
          ]}
        />
      </Section>

      <Section title="Cores padrão por tema">
        <PropsTable
          rows={[
            { name: '--jc-logo-shield / -letters / -wordmark', type: 'claro #0E36E3 · escuro #FFFFFF', description: 'JcLogo com variant="auto".' },
            { name: '--jc-art-primary', type: 'claro #2A2758 · escuro horizon.3', description: 'Brasão alternativo, crista, grega.' },
            { name: '--jc-art-ink', type: 'claro #0C0C0C · escuro texto', description: 'Traços do elmo e contorno do brasão.' },
            { name: '--jc-art-paper', type: 'claro #FFFFFF · escuro surface-2', description: 'Metal do elmo.' },
          ]}
        />
        <P>Para mudar o padrão em todo o app, sobrescreva as variáveis no seu CSS:</P>
        <CodeBlock
          language="css"
          code={`:root[data-mantine-color-scheme='dark'] {
  --jc-logo-shield: var(--mantine-color-electric-3); /* brasão amarelo no escuro */
}`}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mantenha a área de respiro do logo de pelo menos a altura da letra "D" em volta. Não distorça (use só <code>size</code>), não aplique
          sombras nem gradientes, e não use o logo azul sobre fundos escuros: troque para <code>variant="dark"</code>. Ilustrações são
          decorativas por padrão; passe <code>title</code> quando transmitirem informação.
        </P>
      </Section>
    </DocPage>
  );
}
