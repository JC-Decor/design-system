import { useRef, useState } from 'react';
import { Autocomplete, Loader } from '@jcdecor/ui';
import { IconMapPin } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const ruas = ['Rua Augusta', 'Rua Oscar Freire', 'Rua dos Pinheiros', 'Rua da Consolação', 'Avenida Paulista', 'Avenida Rebouças'];

/** Simula a consulta de endereços na API de CEP. */
const buscarEnderecos = (query: string) =>
  new Promise<string[]>((resolve) =>
    setTimeout(() => resolve(ruas.filter((rua) => rua.toLowerCase().includes(query.toLowerCase()))), 800),
  );

export default function Demo() {
  const [value, setValue] = useState('');
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const timeout = useRef<number>(-1);

  const handleChange = (query: string) => {
    setValue(query);
    window.clearTimeout(timeout.current);
    setData([]);
    if (query.trim().length < 2) {
      setLoading(false);
      return;
    }
    setLoading(true);
    timeout.current = window.setTimeout(async () => {
      setData(await buscarEnderecos(query));
      setLoading(false);
    }, 300);
  };

  return (
    <Autocomplete
      label="Endereço de entrega"
      placeholder="Digite ao menos 2 letras"
      leftSection={<IconMapPin size={18} />}
      rightSection={loading ? <Loader size={16} /> : null}
      value={value}
      onChange={handleChange}
      data={data}
      filter={({ options }) => options}
    />
  );
}
