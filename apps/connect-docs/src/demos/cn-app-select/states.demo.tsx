import { AppSelect, SimpleGrid } from '@jcdecor/connect-ui';

const gestores = [
  { value: 'rafael', label: 'Rafael Torres' },
  { value: 'marina', label: 'Marina Costa' },
];

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      <AppSelect label="Gestor imediato" required value="" onChange={() => {}} options={gestores} helperText="Obrigatório para admissões." />
      <AppSelect label="Gestor imediato" required value="" onChange={() => {}} options={gestores} error="Escolha o gestor imediato." />
      <AppSelect label="Centro de custo" value="" onChange={() => {}} options={[]} placeholder="Carregando centros de custo..." loading />
      <AppSelect label="Unidade" value="matriz" onChange={() => {}} options={[{ value: 'matriz', label: 'Matriz — Joinville' }]} disabled />
    </SimpleGrid>
  );
}
