import { AlertsCard } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 520, centered: true, background: 'page' };

export default function Demo() {
  return (
    <AlertsCard
      onFilter={() => {}}
      onFootLinkClick={() => {}}
      items={[
        { tone: 'high', icon: 'doc-clock', title: '3 ASOs vencem esta semana', desc: 'Agende os exames periódicos de Operações.', meta: 'Vence em 2 dias · SESMT', onClick: () => {} },
        { tone: 'med', icon: 'palm', title: 'Férias vencidas de 2 colaboradores', desc: 'Programe as férias antes do fim do período concessivo.', meta: 'Prazo: 30/11', onClick: () => {} },
        { tone: 'low', icon: 'book', title: 'Treinamento de LGPD concluído', desc: '92% da equipe finalizou a trilha obrigatória.', onClick: () => {} },
        { tone: 'info', icon: 'megaphone', title: 'Novo comunicado do RH', desc: 'Calendário de feriados 2027 publicado.' },
      ]}
    />
  );
}
