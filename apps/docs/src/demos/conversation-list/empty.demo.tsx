import { Paper } from '@jcdecor/ui';
import { ConversationList } from '@jcdecor/ui/chat';

export default function Demo() {
  return (
    <Paper withBorder radius="md" h={160} maw={380} style={{ overflow: 'hidden' }}>
      <ConversationList
        conversations={[]}
        searchable={false}
        empty="Nenhum atendimento aberto no momento"
      />
    </Paper>
  );
}
