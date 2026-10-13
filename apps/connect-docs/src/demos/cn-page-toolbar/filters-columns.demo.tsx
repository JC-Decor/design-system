import { useState } from 'react';
import { Button, Icon, PageToolbar } from '@jcdecor/connect-ui';

const columns = [
  { key: 'nome', label: 'Colaborador' },
  { key: 'cargo', label: 'Cargo' },
  { key: 'equipe', label: 'Equipe' },
  { key: 'admissao', label: 'Admissão' },
  { key: 'gestor', label: 'Gestor' },
];

export default function Demo() {
  const [area, setArea] = useState('');
  const [situacao, setSituacao] = useState('ativo');
  const [visibility, setVisibility] = useState<Record<string, boolean>>({ gestor: false });

  return (
    <PageToolbar
      searchPlaceholder="Buscar colaborador..."
      filters={[
        {
          key: 'area',
          label: 'Área',
          value: area,
          onChange: setArea,
          placeholder: 'Todas as áreas',
          options: [
            { value: 'comercial', label: 'Comercial' },
            { value: 'expedicao', label: 'Expedição' },
            { value: 'rh', label: 'Recursos Humanos' },
          ],
        },
        {
          key: 'situacao',
          label: 'Situação',
          value: situacao,
          onChange: setSituacao,
          options: [
            { value: 'ativo', label: 'Ativos' },
            { value: 'ferias', label: 'Em férias' },
            { value: 'experiencia', label: 'Em experiência' },
          ],
        },
      ]}
      onFiltersClear={() => {
        setArea('');
        setSituacao('');
      }}
      columnOptions={columns}
      columnVisibility={visibility}
      onColumnVisibilityChange={setVisibility}
      actions={
        <Button variant="ghost" leftSection={<Icon name="download" size={15} />}>
          Exportar
        </Button>
      }
    />
  );
}
