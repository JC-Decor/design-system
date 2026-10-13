import { useEffect, useMemo, useState } from 'react';
import { GlobalSearchBox, Text, type GlobalSearchGroup } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

const pessoas = [
  { id: 1, label: 'Ana Souza', meta: 'Analista de RH · Recursos Humanos' },
  { id: 2, label: 'André Pires', meta: 'Vendedor · Comercial' },
  { id: 3, label: 'Bruno Lima', meta: 'Analista de Logística · Expedição' },
];
const documentos = [
  { id: 'd1', label: 'Política de férias', meta: 'POP · atualizado em 10/09' },
  { id: 'd2', label: 'Descrição de cargo — Analista de RH', meta: 'Descrição de cargos' },
];
const comunicados = [{ id: 'c1', label: 'Novo plano de benefícios', meta: 'Publicado há 2 dias' }];

export default function Demo() {
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);
  const [escolha, setEscolha] = useState('');

  // Simula a consulta à API (debounce + latência)
  useEffect(() => {
    if (q.trim().length < 2) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, [q]);

  const groups = useMemo<GlobalSearchGroup[]>(() => {
    const match = (s: string) => s.toLowerCase().includes(q.trim().toLowerCase());
    return [
      { key: 'pessoas', title: 'Pessoas', icon: 'users', items: pessoas.filter((p) => match(p.label)) },
      { key: 'documentos', title: 'Documentos', icon: 'book', items: documentos.filter((d) => match(d.label)) },
      { key: 'comunicados', title: 'Comunicados', icon: 'chat', items: comunicados.filter((c) => match(c.label)) },
    ];
  }, [q]);

  return (
    <>
      <GlobalSearchBox
        value={q}
        onChange={setQ}
        loading={loading}
        groups={groups}
        onSelect={(item, group) => setEscolha(`${group.title}: ${item.label}`)}
        shortcut="mod+K"
      />
      <Text fz="sm" c="var(--ds-text-3)" mt="sm">
        Digite “an” ou “po” · {escolha ? `Abrir → ${escolha}` : 'nada escolhido'}
      </Text>
    </>
  );
}
