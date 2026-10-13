import { CellPerson, CellTitle, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      <CellPerson name="Ana Souza" role="Analista de RH" seed="AS" tone="lavender" />
      <CellPerson name="Rafael Torres" role="Gestor · Expedição" seed="RT" tone="blue" />
      <CellPerson name="Carla Dias" role="Coordenadora Comercial" src="https://i.pravatar.cc/80?img=47" />
      <CellPerson name="Diego Martins" role="Desenvolvedor" seed="DM" tone="green" avatarSize={40} />
      <CellTitle icon="doc" tone="blue" title="Contrato de experiência" subtitle="PDF · assinado em 02/09" />
      <CellTitle icon="palm" tone="green" title="Férias coletivas" subtitle="22/12 a 05/01" />
      <CellTitle icon="megaphone" tone="lavender" title="Comunicado de benefícios" subtitle="Publicado há 2 dias" />
      <CellTitle icon="fire" tone="coral" title="Desligamento" subtitle="Aguardando homologação" />
    </SimpleGrid>
  );
}
