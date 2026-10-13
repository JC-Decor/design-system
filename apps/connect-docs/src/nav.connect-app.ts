import type { NavItem } from './nav';

// Helper local: importar `p` de './nav' cria import circular (nav.ts importa este arquivo).
const p = (path: string, title: string, page: NavItem['page'], keywords: string[] = []): NavItem => ({ path, title, page, keywords });

/** Páginas dos componentes de app do Connect (Shell, Sidebar, DataTable, diálogos…). Mantido pelo autor desses componentes. */
export const connectAppPages: NavItem[] = [
  p('/componentes/connect-shell', 'ConnectShell', () => import('./pages/connect/app/ConnectShellPage'), ['shell', 'layout', 'app shell', 'casca']),
  p('/componentes/app-sidebar', 'AppSidebar', () => import('./pages/connect/app/AppSidebarPage'), ['sidebar', 'menu lateral', 'navegação', 'perspectiva']),
  p('/componentes/app-header', 'AppHeader', () => import('./pages/connect/app/AppHeaderPage'), ['header', 'cabeçalho', 'breadcrumb', 'notificações']),
  p('/componentes/global-search-box', 'GlobalSearchBox', () => import('./pages/connect/app/GlobalSearchBoxPage'), ['busca', 'search', 'pesquisa']),
  p('/componentes/page-toolbar', 'PageToolbar', () => import('./pages/connect/app/PageToolbarPage'), ['toolbar', 'filtros', 'chips', 'colunas']),
  p('/componentes/data-table', 'DataTable', () => import('./pages/connect/app/DataTablePage'), ['tabela', 'table', 'paginação', 'ordenação']),
  p('/componentes/selection-banner', 'SelectionBanner', () => import('./pages/connect/app/SelectionBannerPage'), ['seleção', 'ações em massa', 'bulk']),
  p('/componentes/dropdown-menu', 'DropdownMenu', () => import('./pages/connect/app/DropdownMenuPage'), ['menu', 'ações', 'dropdown']),
  p('/componentes/confirm-dialog', 'ConfirmDialog', () => import('./pages/connect/app/ConfirmDialogPage'), ['confirmação', 'modal', 'diálogo']),
  p('/componentes/prompt-dialog', 'PromptDialog', () => import('./pages/connect/app/PromptDialogPage'), ['prompt', 'renomear', 'diálogo']),
  p('/componentes/contextual-drawer', 'ContextualDrawer', () => import('./pages/connect/app/ContextualDrawerPage'), ['drawer', 'painel lateral', 'gaveta']),
  p('/componentes/app-select', 'AppSelect', () => import('./pages/connect/app/AppSelectPage'), ['select', 'combobox', 'formulário']),
  p('/componentes/toast', 'Toast', () => import('./pages/connect/app/ToastPage'), ['notificação', 'aviso', 'toast']),
];

/** Padrões de tela (composições completas). */
export const connectPatternPages: NavItem[] = [
  p('/padroes/painel-do-gestor', 'Painel do gestor', () => import('./pages/patterns/DashboardPattern'), ['dashboard', 'home', 'início', 'kpi']),
];
