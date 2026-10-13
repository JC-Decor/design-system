import type { NavItem } from './nav';

// Helper local (mesmo formato do `p` de ./nav): importar o valor de ./nav criaria um ciclo (nav.ts importa este arquivo).
const p = (path: string, title: string, page: NavItem['page'], keywords: string[] = []): NavItem => ({ path, title, page, keywords });

/** Páginas dos componentes de exibição do Connect (Avatar, Badges, Cards, KPIs…). Mantido pelo autor desses componentes. */
export const connectDisplayPages: NavItem[] = [
  p('/componentes/person-avatar', 'PersonAvatar & AvatarStack', () => import('./pages/connect/display/PersonAvatarPage'), ['Avatar', 'AvatarGroup', 'iniciais', 'foto']),
  p('/componentes/prio-badge', 'PrioBadge & StatusBadge', () => import('./pages/connect/display/PrioBadgePage'), ['Badge', 'prioridade', 'status', 'selo']),
  p('/componentes/filter-chip', 'FilterChip', () => import('./pages/connect/display/FilterChipPage'), ['Chip', 'filtro']),
  p('/componentes/tag', 'Tag & MetaPill', () => import('./pages/connect/display/TagPage'), ['pill', 'etiqueta', 'tag-lav']),
  p('/componentes/card-header', 'Card: CardHeader, SectionLabel…', () => import('./pages/connect/display/CardHeaderPage'), ['Card', 'CardFootLink', 'card-foot-link', 'sec-label']),
  p('/componentes/progress-bar', 'ProgressBar, ToneRing & SegmentBar', () => import('./pages/connect/display/ProgressBarPage'), ['RingProgress', 'PillBar', 'progresso', 'anel']),
  p('/componentes/skeleton-block', 'SkeletonBlock', () => import('./pages/connect/display/SkeletonBlockPage'), ['Skeleton', 'carregando', 'loading']),
  p('/componentes/empty-state-panel', 'EmptyStatePanel', () => import('./pages/connect/display/EmptyStatePanelPage'), ['EmptyState', 'EmptyStateIllustration', 'vazio']),
  p('/componentes/illustration', 'Illustration & IllustrationStrip', () => import('./pages/connect/display/IllustrationPage'), ['ilustração', 'undraw']),
  p('/componentes/resource-state', 'ResourceState', () => import('./pages/connect/display/ResourceStatePage'), ['erro', 'carregando', 'vazio', 'retry']),
  p('/componentes/activity-timeline', 'ActivityTimeline', () => import('./pages/connect/display/ActivityTimelinePage'), ['Timeline', 'atividade', 'histórico']),
  p('/componentes/tab-switcher', 'TabSwitcher', () => import('./pages/connect/display/TabSwitcherPage'), ['abas', 'tabs', 'chips']),
  p('/componentes/metric-summary-card', 'MetricSummaryCard', () => import('./pages/connect/display/MetricSummaryCardPage'), ['sumpill', 'resumo', 'métrica']),
  p('/componentes/kpi-card', 'KpiCard, Spark & MiniSpark', () => import('./pages/connect/display/KpiCardPage'), ['KPI', 'sparkline', 'indicador']),
  p('/componentes/area-chart', 'AreaChart & MoveChart', () => import('./pages/connect/display/AreaChartPage'), ['gráfico', 'chart', 'admissões', 'legenda']),
  p('/componentes/alerts-card', 'AlertsCard', () => import('./pages/connect/display/AlertsCardPage'), ['AlertItem', 'alertas']),
  p('/componentes/quick-actions', 'QuickActions', () => import('./pages/connect/display/QuickActionsPage'), ['atalhos', 'ações rápidas']),
  p('/componentes/expandable-card', 'ExpandableCard', () => import('./pages/connect/display/ExpandableCardPage'), ['expandir', 'acordeão']),
  p('/componentes/metric-reveal-card', 'MetricRevealCard', () => import('./pages/connect/display/MetricRevealCardPage'), ['métrica', 'revelar']),
  p('/componentes/section-header', 'SectionHeader', () => import('./pages/connect/display/SectionHeaderPage'), ['cabeçalho', 'seção']),
  p('/componentes/hero', 'Hero & HeroArt', () => import('./pages/connect/display/HeroPage'), ['banner', 'boas-vindas', 'saudação']),
  p('/componentes/motion-wrapper', 'MotionWrapper & AnimatedSection', () => import('./pages/connect/display/MotionWrapperPage'), ['animação', 'motion', 'reduced motion']),
];
