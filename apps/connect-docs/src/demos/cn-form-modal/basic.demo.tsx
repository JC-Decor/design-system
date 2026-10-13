import { useState } from 'react';
import { Button, FormModal, NativeSelect, Textarea, TextInput } from '@jcdecor/connect-ui';

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Novo setor</Button>
      <FormModal
        open={open}
        onOpenChange={setOpen}
        title="Novo setor"
        description="Os campos simples se distribuem em colunas; textos longos ocupam a linha inteira."
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(false);
        }}
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar setor</Button>
          </>
        }
      >
        <TextInput label="Nome do setor" withAsterisk />
        <TextInput label="Sigla" />
        <NativeSelect label="Gestor" data={['Marina Costa', 'Bruno Lima']} />
        <Textarea label="Descrição" autosize minRows={4} />
      </FormModal>
    </>
  );
}
