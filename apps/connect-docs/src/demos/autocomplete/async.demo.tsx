import { useRef, useState } from 'react';
import { Autocomplete, Icon, Loader } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const cursos = ['Liderança situacional', 'Comunicação não violenta', 'Excel avançado', 'LGPD na prática', 'Feedback eficaz', 'Gestão do tempo'];

/** Simula a consulta ao catálogo de treinamentos. */
const buscarCursos = (query: string) =>
  new Promise<string[]>((resolve) =>
    setTimeout(() => resolve(cursos.filter((curso) => curso.toLowerCase().includes(query.toLowerCase()))), 800),
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
      setData(await buscarCursos(query));
      setLoading(false);
    }, 300);
  };

  return (
    <Autocomplete
      label="Treinamento"
      placeholder="Digite ao menos 2 letras"
      leftSection={<Icon name="book" size={16} />}
      rightSection={loading ? <Loader size={16} /> : null}
      value={value}
      onChange={handleChange}
      data={data}
      filter={({ options }) => options}
    />
  );
}
