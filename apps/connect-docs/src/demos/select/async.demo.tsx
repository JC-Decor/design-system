import { useState } from 'react';
import { Loader, Select } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

/** Simula a busca dos gestores na API. */
const fetchGestores = () =>
  new Promise<string[]>((resolve) =>
    setTimeout(() => resolve(['Ana Ribeiro', 'Carlos Menezes', 'Fernanda Lima', 'Rafael Duarte']), 1200),
  );

export default function Demo() {
  const [gestores, setGestores] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleOpen = async () => {
    if (gestores.length > 0) return;
    setLoading(true);
    setGestores(await fetchGestores());
    setLoading(false);
  };

  return (
    <Select
      label="Gestor direto"
      placeholder="Escolha o gestor"
      data={gestores}
      onDropdownOpen={handleOpen}
      rightSection={loading ? <Loader size={16} /> : undefined}
      nothingFoundMessage={loading ? 'Carregando gestores…' : 'Nenhum gestor disponível'}
    />
  );
}
