import type { ComponentType } from 'react';

export interface NavItem {
  path: string;
  title: string;
  /** Palavras extras para a busca */
  keywords?: string[];
  page: () => Promise<{ default: ComponentType }>;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

const p = (path: string, title: string, page: NavItem['page'], keywords: string[] = []): NavItem => ({ path, title, page, keywords });

export const navigation: NavGroup[] = [
  {
    label: 'Começando',
    items: [
      p('/', 'Introdução', () => import('./pages/start/Intro')),
      p('/instalacao', 'Instalação', () => import('./pages/start/Install'), ['npm', 'setup', 'provider']),
      p('/tema', 'Tema & customização', () => import('./pages/start/Theming'), ['createTheme', 'override', 'dark mode']),
    ],
  },
  {
    label: 'Fundamentos',
    items: [
      p('/fundamentos/cores', 'Cores', () => import('./pages/foundations/Colors'), ['paleta', 'obsidian', 'horizon', 'evergreen', 'electric']),
      p('/fundamentos/tipografia', 'Tipografia', () => import('./pages/foundations/Typography'), ['poppins', 'fonte', 'display', 'headline']),
      p('/fundamentos/espacamento', 'Espaçamento', () => import('./pages/foundations/Spacing'), ['spacing', 'sp']),
      p('/fundamentos/sombras-e-raios', 'Sombras & raios', () => import('./pages/foundations/Shadows'), ['shadow', 'radius']),
      p('/fundamentos/grid', 'Grid & layout', () => import('./pages/foundations/Grid'), ['container', 'colunas', 'breakpoints']),
    ],
  },
  {
    label: 'Marca',
    items: [
      p('/marca', 'Logos e ilustrações', () => import('./pages/brand/BrandPage'), ['logo', 'svg', 'espartano', 'elmo', 'grega', 'colaborador', 'ícone']),
    ],
  },
  // ── Mantine: um item por componente, mesmas categorias de mantine.dev ──
  {
    label: 'Mantine · Layout',
    items: [
      p('/mantine/app-shell', 'AppShell', () => import('./pages/mantine/layout/AppShellPage'), ['Layout']),
      p('/mantine/aspect-ratio', 'AspectRatio', () => import('./pages/mantine/layout/AspectRatioPage'), ['Layout']),
      p('/mantine/center', 'Center', () => import('./pages/mantine/layout/CenterPage'), ['Layout']),
      p('/mantine/container', 'Container', () => import('./pages/mantine/layout/ContainerPage'), ['Layout']),
      p('/mantine/flex', 'Flex', () => import('./pages/mantine/layout/FlexPage'), ['Layout']),
      p('/mantine/grid', 'Grid', () => import('./pages/mantine/layout/GridPage'), ['Layout']),
      p('/mantine/group', 'Group', () => import('./pages/mantine/layout/GroupPage'), ['Layout']),
      p('/mantine/simple-grid', 'SimpleGrid', () => import('./pages/mantine/layout/SimpleGridPage'), ['Layout']),
      p('/mantine/space', 'Space', () => import('./pages/mantine/layout/SpacePage'), ['Layout']),
      p('/mantine/splitter', 'Splitter', () => import('./pages/mantine/layout/SplitterPage'), ['Layout']),
      p('/mantine/stack', 'Stack', () => import('./pages/mantine/layout/StackPage'), ['Layout']),
    ],
  },
  {
    label: 'Mantine · Inputs',
    items: [
      p('/mantine/alpha-slider', 'AlphaSlider', () => import('./pages/mantine/inputs/AlphaSliderPage'), ['Inputs']),
      p('/mantine/angle-slider', 'AngleSlider', () => import('./pages/mantine/inputs/AngleSliderPage'), ['Inputs']),
      p('/mantine/checkbox', 'Checkbox', () => import('./pages/mantine/inputs/CheckboxPage'), ['Inputs']),
      p('/mantine/chip', 'Chip', () => import('./pages/mantine/inputs/ChipPage'), ['Inputs']),
      p('/mantine/color-input', 'ColorInput', () => import('./pages/mantine/inputs/ColorInputPage'), ['Inputs']),
      p('/mantine/color-picker', 'ColorPicker', () => import('./pages/mantine/inputs/ColorPickerPage'), ['Inputs']),
      p('/mantine/fieldset', 'Fieldset', () => import('./pages/mantine/inputs/FieldsetPage'), ['Inputs']),
      p('/mantine/file-input', 'FileInput', () => import('./pages/mantine/inputs/FileInputPage'), ['Inputs']),
      p('/mantine/hue-slider', 'HueSlider', () => import('./pages/mantine/inputs/HueSliderPage'), ['Inputs']),
      p('/mantine/input', 'Input', () => import('./pages/mantine/inputs/InputPage'), ['Inputs']),
      p('/mantine/json-input', 'JsonInput', () => import('./pages/mantine/inputs/JsonInputPage'), ['Inputs']),
      p('/mantine/mask-input', 'MaskInput', () => import('./pages/mantine/inputs/MaskInputPage'), ['Inputs']),
      p('/mantine/native-select', 'NativeSelect', () => import('./pages/mantine/inputs/NativeSelectPage'), ['Inputs']),
      p('/mantine/number-input', 'NumberInput', () => import('./pages/mantine/inputs/NumberInputPage'), ['Inputs']),
      p('/mantine/password-input', 'PasswordInput', () => import('./pages/mantine/inputs/PasswordInputPage'), ['Inputs']),
      p('/mantine/pin-input', 'PinInput', () => import('./pages/mantine/inputs/PinInputPage'), ['Inputs']),
      p('/mantine/radio', 'Radio', () => import('./pages/mantine/inputs/RadioPage'), ['Inputs']),
      p('/mantine/range-slider', 'RangeSlider', () => import('./pages/mantine/inputs/RangeSliderPage'), ['Inputs']),
      p('/mantine/rating', 'Rating', () => import('./pages/mantine/inputs/RatingPage'), ['Inputs']),
      p('/mantine/segmented-control', 'SegmentedControl', () => import('./pages/mantine/inputs/SegmentedControlPage'), ['Inputs']),
      p('/mantine/slider', 'Slider', () => import('./pages/mantine/inputs/SliderPage'), ['Inputs']),
      p('/mantine/switch', 'Switch', () => import('./pages/mantine/inputs/SwitchPage'), ['Inputs']),
      p('/mantine/textarea', 'Textarea', () => import('./pages/mantine/inputs/TextareaPage'), ['Inputs']),
      p('/mantine/text-input', 'TextInput', () => import('./pages/mantine/inputs/TextInputPage'), ['Inputs']),
    ],
  },
  {
    label: 'Mantine · Combobox',
    items: [
      p('/mantine/autocomplete', 'Autocomplete', () => import('./pages/mantine/combobox/AutocompletePage'), ['Combobox']),
      p('/mantine/cascader', 'Cascader', () => import('./pages/mantine/combobox/CascaderPage'), ['Combobox']),
      p('/mantine/combobox', 'Combobox', () => import('./pages/mantine/combobox/ComboboxPage'), ['Combobox']),
      p('/mantine/combobox-popover', 'ComboboxPopover', () => import('./pages/mantine/combobox/ComboboxPopoverPage'), ['Combobox']),
      p('/mantine/multi-select', 'MultiSelect', () => import('./pages/mantine/combobox/MultiSelectPage'), ['Combobox']),
      p('/mantine/pill', 'Pill', () => import('./pages/mantine/combobox/PillPage'), ['Combobox']),
      p('/mantine/pills-input', 'PillsInput', () => import('./pages/mantine/combobox/PillsInputPage'), ['Combobox']),
      p('/mantine/select', 'Select', () => import('./pages/mantine/combobox/SelectPage'), ['Combobox']),
      p('/mantine/tags-input', 'TagsInput', () => import('./pages/mantine/combobox/TagsInputPage'), ['Combobox']),
      p('/mantine/tree-select', 'TreeSelect', () => import('./pages/mantine/combobox/TreeSelectPage'), ['Combobox']),
    ],
  },
  {
    label: 'Mantine · Buttons',
    items: [
      p('/mantine/action-icon', 'ActionIcon', () => import('./pages/mantine/buttons/ActionIconPage'), ['Buttons']),
      p('/mantine/button', 'Button', () => import('./pages/mantine/buttons/ButtonPage'), ['Buttons']),
      p('/mantine/close-button', 'CloseButton', () => import('./pages/mantine/buttons/CloseButtonPage'), ['Buttons']),
      p('/mantine/copy-button', 'CopyButton', () => import('./pages/mantine/buttons/CopyButtonPage'), ['Buttons']),
      p('/mantine/file-button', 'FileButton', () => import('./pages/mantine/buttons/FileButtonPage'), ['Buttons']),
      p('/mantine/unstyled-button', 'UnstyledButton', () => import('./pages/mantine/buttons/UnstyledButtonPage'), ['Buttons']),
    ],
  },
  {
    label: 'Mantine · Navegação',
    items: [
      p('/mantine/anchor', 'Anchor', () => import('./pages/mantine/navigation/AnchorPage'), ['Navegação']),
      p('/mantine/breadcrumbs', 'Breadcrumbs', () => import('./pages/mantine/navigation/BreadcrumbsPage'), ['Navegação']),
      p('/mantine/burger', 'Burger', () => import('./pages/mantine/navigation/BurgerPage'), ['Navegação']),
      p('/mantine/nav-link', 'NavLink', () => import('./pages/mantine/navigation/NavLinkPage'), ['Navegação']),
      p('/mantine/pagination', 'Pagination', () => import('./pages/mantine/navigation/PaginationPage'), ['Navegação']),
      p('/mantine/stepper', 'Stepper', () => import('./pages/mantine/navigation/StepperPage'), ['Navegação']),
      p('/mantine/table-of-contents', 'TableOfContents', () => import('./pages/mantine/navigation/TableOfContentsPage'), ['Navegação']),
      p('/mantine/tabs', 'Tabs', () => import('./pages/mantine/navigation/TabsPage'), ['Navegação']),
      p('/mantine/tree', 'Tree', () => import('./pages/mantine/navigation/TreePage'), ['Navegação']),
    ],
  },
  {
    label: 'Mantine · Feedback',
    items: [
      p('/mantine/alert', 'Alert', () => import('./pages/mantine/feedback/AlertPage'), ['Feedback']),
      p('/mantine/empty-state', 'EmptyState', () => import('./pages/mantine/feedback/EmptyStatePage'), ['Feedback']),
      p('/mantine/loader', 'Loader', () => import('./pages/mantine/feedback/LoaderPage'), ['Feedback']),
      p('/mantine/notification', 'Notification', () => import('./pages/mantine/feedback/NotificationPage'), ['Feedback']),
      p('/mantine/progress', 'Progress', () => import('./pages/mantine/feedback/ProgressPage'), ['Feedback']),
      p('/mantine/ring-progress', 'RingProgress', () => import('./pages/mantine/feedback/RingProgressPage'), ['Feedback']),
      p('/mantine/semi-circle-progress', 'SemiCircleProgress', () => import('./pages/mantine/feedback/SemiCircleProgressPage'), ['Feedback']),
      p('/mantine/skeleton', 'Skeleton', () => import('./pages/mantine/feedback/SkeletonPage'), ['Feedback']),
    ],
  },
  {
    label: 'Mantine · Overlays',
    items: [
      p('/mantine/action-bar', 'ActionBar', () => import('./pages/mantine/overlays/ActionBarPage'), ['Overlays']),
      p('/mantine/affix', 'Affix', () => import('./pages/mantine/overlays/AffixPage'), ['Overlays']),
      p('/mantine/dialog', 'Dialog', () => import('./pages/mantine/overlays/DialogPage'), ['Overlays']),
      p('/mantine/drawer', 'Drawer', () => import('./pages/mantine/overlays/DrawerPage'), ['Overlays']),
      p('/mantine/floating-indicator', 'FloatingIndicator', () => import('./pages/mantine/overlays/FloatingIndicatorPage'), ['Overlays']),
      p('/mantine/floating-window', 'FloatingWindow', () => import('./pages/mantine/overlays/FloatingWindowPage'), ['Overlays']),
      p('/mantine/hover-card', 'HoverCard', () => import('./pages/mantine/overlays/HoverCardPage'), ['Overlays']),
      p('/mantine/loading-overlay', 'LoadingOverlay', () => import('./pages/mantine/overlays/LoadingOverlayPage'), ['Overlays']),
      p('/mantine/menu', 'Menu', () => import('./pages/mantine/overlays/MenuPage'), ['Overlays']),
      p('/mantine/menubar', 'Menubar', () => import('./pages/mantine/overlays/MenubarPage'), ['Overlays']),
      p('/mantine/modal', 'Modal', () => import('./pages/mantine/overlays/ModalPage'), ['Overlays']),
      p('/mantine/overlay', 'Overlay', () => import('./pages/mantine/overlays/OverlayPage'), ['Overlays']),
      p('/mantine/popover', 'Popover', () => import('./pages/mantine/overlays/PopoverPage'), ['Overlays']),
      p('/mantine/tooltip', 'Tooltip', () => import('./pages/mantine/overlays/TooltipPage'), ['Overlays']),
    ],
  },
  {
    label: 'Mantine · Exibição de dados',
    items: [
      p('/mantine/accordion', 'Accordion', () => import('./pages/mantine/data-display/AccordionPage'), ['Exibição de dados']),
      p('/mantine/avatar', 'Avatar', () => import('./pages/mantine/data-display/AvatarPage'), ['Exibição de dados']),
      p('/mantine/background-image', 'BackgroundImage', () => import('./pages/mantine/data-display/BackgroundImagePage'), ['Exibição de dados']),
      p('/mantine/badge', 'Badge', () => import('./pages/mantine/data-display/BadgePage'), ['Exibição de dados']),
      p('/mantine/card', 'Card', () => import('./pages/mantine/data-display/CardPage'), ['Exibição de dados']),
      p('/mantine/color-swatch', 'ColorSwatch', () => import('./pages/mantine/data-display/ColorSwatchPage'), ['Exibição de dados']),
      p('/mantine/data-list', 'DataList', () => import('./pages/mantine/data-display/DataListPage'), ['Exibição de dados']),
      p('/mantine/image', 'Image', () => import('./pages/mantine/data-display/ImagePage'), ['Exibição de dados']),
      p('/mantine/indicator', 'Indicator', () => import('./pages/mantine/data-display/IndicatorPage'), ['Exibição de dados']),
      p('/mantine/kbd', 'Kbd', () => import('./pages/mantine/data-display/KbdPage'), ['Exibição de dados']),
      p('/mantine/number-formatter', 'NumberFormatter', () => import('./pages/mantine/data-display/NumberFormatterPage'), ['Exibição de dados']),
      p('/mantine/overflow-list', 'OverflowList', () => import('./pages/mantine/data-display/OverflowListPage'), ['Exibição de dados']),
      p('/mantine/rolling-number', 'RollingNumber', () => import('./pages/mantine/data-display/RollingNumberPage'), ['Exibição de dados']),
      p('/mantine/spoiler', 'Spoiler', () => import('./pages/mantine/data-display/SpoilerPage'), ['Exibição de dados']),
      p('/mantine/theme-icon', 'ThemeIcon', () => import('./pages/mantine/data-display/ThemeIconPage'), ['Exibição de dados']),
      p('/mantine/timeline', 'Timeline', () => import('./pages/mantine/data-display/TimelinePage'), ['Exibição de dados']),
    ],
  },
  {
    label: 'Mantine · Tipografia',
    items: [
      p('/mantine/blockquote', 'Blockquote', () => import('./pages/mantine/typography/BlockquotePage'), ['Tipografia']),
      p('/mantine/code', 'Code', () => import('./pages/mantine/typography/CodePage'), ['Tipografia']),
      p('/mantine/highlight', 'Highlight', () => import('./pages/mantine/typography/HighlightPage'), ['Tipografia']),
      p('/mantine/list', 'List', () => import('./pages/mantine/typography/ListPage'), ['Tipografia']),
      p('/mantine/mark', 'Mark', () => import('./pages/mantine/typography/MarkPage'), ['Tipografia']),
      p('/mantine/table', 'Table', () => import('./pages/mantine/typography/TablePage'), ['Tipografia']),
      p('/mantine/text', 'Text', () => import('./pages/mantine/typography/TextPage'), ['Tipografia']),
      p('/mantine/title', 'Title', () => import('./pages/mantine/typography/TitlePage'), ['Tipografia']),
      p('/mantine/typography', 'Typography', () => import('./pages/mantine/typography/TypographyPage'), ['Tipografia']),
    ],
  },
  {
    label: 'Mantine · Diversos',
    items: [
      p('/mantine/box', 'Box', () => import('./pages/mantine/misc/BoxPage'), ['Diversos']),
      p('/mantine/collapse', 'Collapse', () => import('./pages/mantine/misc/CollapsePage'), ['Diversos']),
      p('/mantine/divider', 'Divider', () => import('./pages/mantine/misc/DividerPage'), ['Diversos']),
      p('/mantine/focus-trap', 'FocusTrap', () => import('./pages/mantine/misc/FocusTrapPage'), ['Diversos']),
      p('/mantine/marquee', 'Marquee', () => import('./pages/mantine/misc/MarqueePage'), ['Diversos']),
      p('/mantine/paper', 'Paper', () => import('./pages/mantine/misc/PaperPage'), ['Diversos']),
      p('/mantine/portal', 'Portal', () => import('./pages/mantine/misc/PortalPage'), ['Diversos']),
      p('/mantine/scroll-area', 'ScrollArea', () => import('./pages/mantine/misc/ScrollAreaPage'), ['Diversos']),
      p('/mantine/scroller', 'Scroller', () => import('./pages/mantine/misc/ScrollerPage'), ['Diversos']),
      p('/mantine/transition', 'Transition', () => import('./pages/mantine/misc/TransitionPage'), ['Diversos']),
      p('/mantine/visually-hidden', 'VisuallyHidden', () => import('./pages/mantine/misc/VisuallyHiddenPage'), ['Diversos']),
    ],
  },
  {
    label: 'Componentes JC',
    items: [
      p('/componentes/tipografia', 'Display, Headline…', () => import('./pages/jc/TypographyPage'), ['Kicker', 'Subheadline', 'Disclaimer']),
      p('/componentes/tag', 'Tag', () => import('./pages/jc/TagPage'), ['selo', 'status']),
      p('/componentes/promo-banner', 'PromoBanner', () => import('./pages/jc/PromoBannerPage'), ['cupom', 'campanha']),
      p('/componentes/content-card', 'ContentCard', () => import('./pages/jc/ContentCardPage'), ['card']),
      p('/componentes/kpi-card', 'KpiCard', () => import('./pages/jc/KpiCardPage'), ['métrica', 'dashboard', 'KpiGroup']),
      p('/componentes/top-nav', 'TopNav', () => import('./pages/jc/TopNavPage'), ['navbar', 'header']),
      p('/componentes/page-header', 'PageHeader', () => import('./pages/jc/PageHeaderPage'), ['título', 'breadcrumbs']),
      p('/componentes/data-table', 'DataTable', () => import('./pages/jc/DataTablePage'), ['tabela', 'ordenação', 'paginação']),
      p('/componentes/theme-toggle', 'ThemeToggle', () => import('./pages/jc/ThemeTogglePage'), ['dark mode', 'tema escuro']),
      p('/componentes/token-swatch', 'TokenSwatch & ColorRamp', () => import('./pages/jc/TokenSwatchPage'), ['cor', 'amostra']),
    ],
  },
  {
    label: 'E-commerce',
    items: [
      p('/ecommerce/product-card', 'ProductCard', () => import('./pages/ecommerce/ProductCardPage'), ['produto', 'vitrine']),
      p('/ecommerce/price-tag', 'PriceTag', () => import('./pages/ecommerce/PriceTagPage'), ['preço', 'parcelamento', 'pix']),
      p('/ecommerce/coupon-code', 'CouponCode', () => import('./pages/ecommerce/CouponCodePage'), ['cupom', 'desconto']),
    ],
  },
  {
    label: 'Chat',
    items: [
      p('/chat', 'Visão geral', () => import('./pages/chat/ChatOverviewPage'), ['ChatLayout', 'mensagens', 'atendimento']),
      p('/chat/chat-message', 'ChatMessage', () => import('./pages/chat/ChatMessagePage'), ['bolha']),
      p('/chat/chat-thread', 'ChatThread', () => import('./pages/chat/ChatThreadPage'), ['conversa']),
      p('/chat/chat-composer', 'ChatComposer', () => import('./pages/chat/ChatComposerPage'), ['input', 'enviar']),
      p('/chat/conversation-list', 'ConversationList', () => import('./pages/chat/ConversationListPage'), ['inbox']),
      p('/chat/header-e-digitando', 'ChatHeader & TypingIndicator', () => import('./pages/chat/ChatHeaderPage'), ['digitando']),
    ],
  },
  {
    label: 'Gráficos',
    items: [
      p('/graficos', 'Visão geral', () => import('./pages/charts/ChartsOverviewPage'), ['paleta', 'charts', 'recharts']),
      p('/graficos/linha-e-area', 'LineChart & AreaChart', () => import('./pages/charts/LineAreaPage'), ['linha', 'área']),
      p('/graficos/barras', 'BarChart', () => import('./pages/charts/BarPage'), ['barras', 'colunas']),
      p('/graficos/rosca-e-pizza', 'DonutChart & PieChart', () => import('./pages/charts/DonutPiePage'), ['rosca', 'pizza']),
      p('/graficos/sparkline', 'Sparkline', () => import('./pages/charts/SparklinePage'), ['mini gráfico']),
      p('/graficos/chart-card', 'ChartCard', () => import('./pages/charts/ChartCardPage'), ['card de gráfico']),
    ],
  },
  {
    label: 'Padrões',
    items: [
      p('/padroes/dashboard', 'Dashboard', () => import('./pages/patterns/DashboardPattern'), ['painel', 'métricas']),
      p('/padroes/atendimento', 'Atendimento (chat)', () => import('./pages/patterns/SupportPattern'), ['suporte', 'inbox']),
      p('/padroes/vitrine', 'Vitrine de produtos', () => import('./pages/patterns/StorefrontPattern'), ['loja', 'catálogo']),
    ],
  },
];

export const allPages = navigation.flatMap((group) => group.items.map((item) => ({ ...item, group: group.label })));
