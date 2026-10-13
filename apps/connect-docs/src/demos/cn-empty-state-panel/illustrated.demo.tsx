import { EmptyStateIllustration, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <Stack>
      <EmptyStateIllustration
        variant="card"
        illustration="teamCollaboration"
        title="Sua equipe ainda está vazia"
        description="Convide colaboradores ou importe a planilha de admissões."
        actionLabel="Convidar pessoas"
        onAction={() => {}}
        secondaryActionLabel="Importar planilha"
        onSecondaryAction={() => {}}
      />
      <EmptyStateIllustration variant="compact" illustration="document" title="Nenhum documento novo" description="Holerites e informes aparecem aqui." />
      <EmptyStateIllustration variant="default" module="training" title="Nenhum treinamento atribuído" description="Seu gestor ainda não indicou trilhas para você." />
      <EmptyStateIllustration
        variant="full"
        illustration="workFriends"
        title="Bem-vindo ao Painel do Colaborador"
        description="Comece completando seu cadastro."
        actionLabel="Completar cadastro"
        onAction={() => {}}
      />
    </Stack>
  );
}
