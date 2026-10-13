import { Button, Group, ToastViewport, toast } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Group justify="center">
      <Button variant="ghost" onClick={() => toast.success('Férias de Ana Souza aprovadas.')}>
        Sucesso
      </Button>
      <Button variant="ghost" onClick={() => toast.error('Não foi possível enviar o comunicado. Tente novamente.')}>
        Erro
      </Button>
      <Button variant="ghost" onClick={() => toast.info('Ponto sincronizado com o Pontomais às 08:12.')}>
        Informação
      </Button>
      <Button variant="outline" onClick={() => toast.clear()}>
        Limpar todos
      </Button>

      {/* No app, use <ToastProvider> uma vez na raiz; aqui a viewport fica no próprio exemplo */}
      <ToastViewport />
    </Group>
  );
}
