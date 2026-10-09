import { Paper } from '@jcdecor/ui';
import { ChatComposer } from '@jcdecor/ui/chat';

export default function Demo() {
  return (
    <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
      <ChatComposer
        disabled
        allowAttachments
        placeholder="Atendimento encerrado — abra um novo chamado"
        onSend={() => {}}
      />
    </Paper>
  );
}
