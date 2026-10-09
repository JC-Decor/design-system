import { useState } from 'react';
import { Loader, Select } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

/** Simula a busca das lojas na API. */
const fetchLojas = () =>
  new Promise<string[]>((resolve) =>
    setTimeout(() => resolve(['JC Decor Moema', 'JC Decor Pinheiros', 'JC Decor Campinas', 'JC Decor Curitiba']), 1200),
  );

export default function Demo() {
  const [lojas, setLojas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleOpen = async () => {
    if (lojas.length > 0) return;
    setLoading(true);
    setLojas(await fetchLojas());
    setLoading(false);
  };

  return (
    <Select
      label="Retirar na loja"
      placeholder="Escolha a loja"
      data={lojas}
      onDropdownOpen={handleOpen}
      rightSection={loading ? <Loader size={16} /> : undefined}
      nothingFoundMessage={loading ? 'Carregando lojas…' : 'Nenhuma loja disponível'}
    />
  );
}
