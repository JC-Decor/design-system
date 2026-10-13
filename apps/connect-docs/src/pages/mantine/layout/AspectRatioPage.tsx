import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function AspectRatioPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="AspectRatio"
      source="mantine"
      mantineName="aspect-ratio"
      description="Mantém uma proporção fixa entre largura e altura. Use em capas de comunicados, miniaturas de treinamentos e vídeos para evitar saltos de layout enquanto carregam."
      importCode={`import { AspectRatio } from '@jcdecor/connect-ui';`}
    >
      <Section title="Imagem">
        <P>
          Passe a proporção em <code>ratio</code> (largura / altura). O filho — imagem, vídeo, iframe — preenche a área com{' '}
          <code>object-fit: cover</code>.
        </P>
        <Demo id="aspect-ratio/image" />
      </Section>

      <Section title="Miniaturas quadradas">
        <P>Em catálogos de treinamentos, <code>ratio={'{1}'}</code> garante que todas as fotos tenham o mesmo tamanho, independente do arquivo original.</P>
        <Demo id="aspect-ratio/thumbnails" />
      </Section>

      <Section title="Dentro de flex">
        <P>
          Em containers <code>flex</code>, o AspectRatio não tem largura própria: defina <code>w</code>, <code>flex</code> ou{' '}
          <code>miw</code>.
        </P>
        <Demo id="aspect-ratio/flex" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Sem customizações — o AspectRatio não tem aparência própria. Aplique o raio do tema no filho (por exemplo{' '}
          <code>{'<Image radius="lg" />'}</code>, 20px como os cards).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable rows={[{ name: 'ratio', type: 'number', default: '1', description: 'Proporção largura / altura, ex.: 16 / 9, 4 / 3, 1.' }]} />
      </Section>

      <Section title="Boas práticas">
        <P>
          Padronize as proporções por contexto: 1:1 em miniaturas de treinamentos, 4:3 em cards com ilustração e 16:9 em capas de comunicados e vídeos.
        </P>
      </Section>
    </DocPage>
  );
}
