import { useEffect, useId, useState, type CSSProperties, type ReactNode } from 'react';
import { Menu } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import type { NavigateOptions, NavItem, Perspective, PerspectiveOption } from './AppSidebar.types';
import classes from './AppSidebar.module.css';

export interface AppSidebarProps {
  perspective: Perspective;
  /** Chave do item ativo (item simples ou filho de um grupo) */
  activeKey: string;
  onNavigate: (key: string, opts?: NavigateOptions) => void;
  /** Fundo da sidebar (cor ou gradiente) @default navy da marca */
  primary?: string;
  /** Largura no desktop, em px @default 248 */
  width?: number;
  /** Com `onSwitchPerspective`, a pílula da perspectiva vira um seletor */
  perspectiveOptions?: PerspectiveOption[];
  onSwitchPerspective?: (key: string) => void;
  /** Modo gaveta (mobile): largura fluida e botão de fechar */
  isDrawer?: boolean;
  onClose?: () => void;
  /** Marca no topo. Padrão: selo "JC" + "Painel do Colaborador" */
  logo?: ReactNode;
  /** Rodapé. Padrão: "Painel do Colaborador" + copyright; `null` remove */
  footer?: ReactNode;
  /** @default 'app-sidebar' (referenciado pelo aria-controls do botão de menu do cabeçalho) */
  id?: string;
  /** @default 'Menu principal' */
  'aria-label'?: string;
  className?: string;
  style?: CSSProperties;
}

function NavBadge({ children }: { children: ReactNode }) {
  if (children === undefined || children === null || children === false) return null;
  return <span className={classes.badge}>{children}</span>;
}

interface SbGroupProps {
  item: NavItem;
  activeKey: string;
  onNavigate: (key: string) => void;
  expanded: boolean;
  onToggle: () => void;
}

function SbGroup({ item, activeKey, onNavigate, expanded, onToggle }: SbGroupProps) {
  const childrenId = useId();
  const hasChildren = (item.children?.length ?? 0) > 0;

  if (!hasChildren) {
    const active = item.key === activeKey;
    return (
      <button
        type="button"
        className={classes.item}
        data-active={active || undefined}
        aria-current={active ? 'page' : undefined}
        onClick={() => onNavigate(item.key)}
      >
        <span className={classes.indicator} />
        <Icon name={item.icon ?? 'home'} size={18} />
        <span className={classes.itemLabel}>{item.label}</span>
        <NavBadge>{item.badge}</NavBadge>
      </button>
    );
  }

  const childActive = item.children!.some((c) => c.key === activeKey);
  return (
    <>
      <button
        type="button"
        className={classes.item}
        data-active-soft={(childActive && !expanded) || undefined}
        aria-expanded={expanded}
        aria-controls={childrenId}
        onClick={onToggle}
      >
        <span className={classes.indicator} />
        <Icon name={item.icon ?? 'home'} size={18} />
        <span className={classes.itemLabel}>{item.label}</span>
        <NavBadge>{item.badge}</NavBadge>
        <Icon name="chev" size={14} className={classes.groupChevron} data-expanded={expanded || undefined} />
      </button>
      {expanded && (
        <div className={classes.children} id={childrenId}>
          {item.children!.map((c) => {
            const active = c.key === activeKey;
            return (
              <button
                key={c.key}
                type="button"
                className={classes.child}
                data-active={active || undefined}
                aria-current={active ? 'page' : undefined}
                onClick={() => onNavigate(c.key)}
              >
                <span className={classes.childDot} />
                <span className={classes.itemLabel}>{c.label}</span>
                <NavBadge>{c.badge}</NavBadge>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

interface PerspectiveSwitcherProps {
  current: Perspective;
  options: PerspectiveOption[];
  onSwitch: (key: string) => void;
}

function PerspectiveSwitcher({ current, options, onSwitch }: PerspectiveSwitcherProps) {
  const [opened, setOpened] = useState(false);
  return (
    <div className={classes.switchWrap}>
      <Menu opened={opened} onChange={setOpened} width="target" position="bottom" offset={6} radius="md">
        <Menu.Target>
          <button
            type="button"
            className={clsx(classes.persona, classes.personaButton)}
            data-open={opened || undefined}
            aria-label={`Perspectiva: ${current.label}. Trocar perspectiva`}
          >
            <span className={classes.personaDot} />
            <span className={classes.personaLabel}>{current.label}</span>
            <Icon name="chev" size={12} className={classes.personaChevron} data-expanded={opened || undefined} />
          </button>
        </Menu.Target>
        <Menu.Dropdown className={classes.switchMenu}>
          {options.map((opt) => {
            const active = opt.key === current.key;
            return (
              <Menu.Item
                key={opt.key}
                className={classes.switchOption}
                data-active={active || undefined}
                aria-current={active || undefined}
                onClick={() => onSwitch(opt.key)}
                leftSection={
                  <span
                    className={classes.switchAvatar}
                    style={{ background: `var(--cn-tone-${opt.userTone}-bg)`, color: `var(--cn-tone-${opt.userTone}-fg)` }}
                  >
                    {opt.userSeed}
                  </span>
                }
                rightSection={active ? <Icon name="check" size={13} className={classes.switchCheck} /> : undefined}
              >
                {opt.label}
              </Menu.Item>
            );
          })}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

function DefaultLogo() {
  return (
    <div className={classes.brandDefault}>
      <span className={classes.mark} aria-hidden="true">
        JC
      </span>
      <span>
        <span className={classes.brandName}>Connect JC</span>
        <span className={clsx(classes.brandName, classes.brandNameStrong)}>Painel do Colaborador</span>
      </span>
    </div>
  );
}

function DefaultFooter() {
  return (
    <>
      <div className={classes.footLabel}>Painel do Colaborador</div>
      <div className={classes.footCopy}>© {new Date().getFullYear()} — Todos os direitos reservados</div>
    </>
  );
}

const collectParents = (perspective: Perspective, activeKey: string) =>
  [...perspective.nav.primary, ...perspective.nav.secondary]
    .filter((g) => g.children?.some((c) => c.key === activeKey))
    .map((g) => g.key);

/**
 * Sidebar navy do Connect: textura sutil, marca, pílula/seletor de perspectiva, navegação primária e
 * secundária (com grupos expansíveis, item ativo com indicador e selos) e rodapé com arte.
 */
export function AppSidebar({
  perspective,
  activeKey,
  onNavigate,
  primary,
  width = 248,
  perspectiveOptions,
  onSwitchPerspective,
  isDrawer = false,
  onClose,
  logo,
  footer,
  id = 'app-sidebar',
  'aria-label': ariaLabel = 'Menu principal',
  className,
  style,
}: AppSidebarProps) {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(collectParents(perspective, activeKey)));

  // Ao navegar para um filho, abre o grupo correspondente (sem fechar os que o usuário abriu)
  useEffect(() => {
    const parents = collectParents(perspective, activeKey);
    if (parents.length === 0) return;
    setExpanded((prev) => {
      if (parents.every((k) => prev.has(k))) return prev;
      const next = new Set(prev);
      parents.forEach((k) => next.add(k));
      return next;
    });
  }, [activeKey, perspective]);

  const toggle = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const renderGroup = (it: NavItem) => (
    <SbGroup
      key={it.key}
      item={it}
      activeKey={activeKey}
      onNavigate={onNavigate}
      expanded={expanded.has(it.key)}
      onToggle={() => toggle(it.key)}
    />
  );

  return (
    <aside
      id={id}
      className={clsx(classes.root, className)}
      data-drawer={isDrawer || undefined}
      style={{ width: isDrawer ? undefined : width, ...(primary ? { '--sb-bg': primary } : null), ...style } as CSSProperties}
      aria-label={ariaLabel}
    >
      <div className={classes.grain} aria-hidden="true" />

      <div className={classes.brand}>
        {logo ?? <DefaultLogo />}
        {isDrawer && onClose && (
          <button type="button" className={classes.close} aria-label="Fechar menu" onClick={onClose}>
            <Icon name="x" size={18} />
          </button>
        )}
      </div>

      {perspectiveOptions && onSwitchPerspective ? (
        <PerspectiveSwitcher current={perspective} options={perspectiveOptions} onSwitch={onSwitchPerspective} />
      ) : (
        <div className={classes.persona}>
          <span className={classes.personaDot} />
          {perspective.label}
        </div>
      )}

      <nav className={classes.nav} aria-label={ariaLabel}>
        {perspective.nav.primary.map(renderGroup)}
        {perspective.nav.secondary.length > 0 && <div className={classes.divider} role="separator" />}
        {perspective.nav.secondary.map(renderGroup)}
      </nav>

      {footer !== null && (
        <div className={classes.foot}>
          <svg className={classes.footArt} viewBox="0 0 200 80" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <circle cx="20" cy="60" r="34" stroke="white" strokeOpacity=".06" />
            <circle cx="80" cy="80" r="44" stroke="white" strokeOpacity=".05" />
            <circle cx="160" cy="50" r="28" stroke="white" strokeOpacity=".07" />
          </svg>
          {footer ?? <DefaultFooter />}
        </div>
      )}
    </aside>
  );
}
AppSidebar.displayName = '@jcdecor/connect-ui/AppSidebar';
