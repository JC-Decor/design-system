import { useCallback, useEffect, type CSSProperties, type ReactNode } from 'react';
import { AppShell, type AppShellProps } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import clsx from 'clsx';
import { AppHeader, type AppHeaderProps } from '../AppHeader';
import { AppSidebar, type AppSidebarProps } from '../AppSidebar/AppSidebar';
import type { NavigateOptions, Perspective } from '../AppSidebar/AppSidebar.types';
import { usePerspectiveSwitcher } from '../AppSidebar/PerspectiveSwitcherContext';
import classes from './ConnectShell.module.css';

/** Abaixo de 1024px a sidebar vira gaveta (mesmo corte do Connect). */
const MOBILE_QUERY = '(max-width: 63.99em)';

export interface ConnectShellProps
  extends Omit<AppShellProps, 'children' | 'navbar' | 'header' | 'aside' | 'footer' | 'layout' | 'title'> {
  perspective: Perspective;
  activeKey: string;
  onNavigate: (key: string, opts?: NavigateOptions) => void;
  /** Fundo da sidebar (cor ou gradiente) @default navy */
  primary?: string;
  headerTitle?: ReactNode;
  headerSubtitle?: ReactNode;
  breadcrumb?: ReactNode[];
  /** Largura da sidebar no desktop @default 248 */
  sidebarWidth?: number;
  /** Props extras da sidebar (logo, footer…) */
  sidebarProps?: Partial<AppSidebarProps>;
  /** Props extras do cabeçalho (search, actions, userMenuItems…) */
  headerProps?: Partial<AppHeaderProps>;
  /** Força o modo gaveta (mobile) independentemente da largura da tela */
  forceMobile?: boolean;
  children?: ReactNode;
  /** Classe/estilo da área de conteúdo (`.content`) */
  contentClassName?: string;
  contentStyle?: CSSProperties;
}

/**
 * Casca do app Connect sobre o `AppShell` do Mantine: sidebar navy à esquerda, cabeçalho fixo e conteúdo.
 * Abaixo de 1024px a sidebar vira gaveta com hambúrguer, fundo escurecido, Esc para fechar e trava de rolagem.
 * O seletor de perspectiva aparece quando há um `PerspectiveSwitcherContext.Provider` acima.
 */
export function ConnectShell({
  perspective,
  activeKey,
  onNavigate,
  primary,
  headerTitle,
  headerSubtitle,
  breadcrumb,
  sidebarWidth = 248,
  sidebarProps,
  headerProps,
  forceMobile,
  children,
  contentClassName,
  contentStyle,
  className,
  mode,
  ...others
}: ConnectShellProps) {
  const switcher = usePerspectiveSwitcher();
  const isMobileQuery = useMediaQuery(MOBILE_QUERY, false, { getInitialValueInEffect: true });
  const isMobile = forceMobile ?? !!isMobileQuery;
  const [navOpen, { close: closeNav, toggle: toggleNav }] = useDisclosure(false);
  const sidebarId = sidebarProps?.id ?? 'app-sidebar';

  // Fecha a gaveta ao trocar de página e ao voltar para o desktop
  useEffect(() => closeNav(), [activeKey, closeNav]);
  useEffect(() => {
    if (!isMobile) closeNav();
  }, [isMobile, closeNav]);

  // Gaveta aberta: trava a rolagem do body e fecha com Esc
  useEffect(() => {
    if (!isMobile || !navOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNav();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    if (mode !== 'static') document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isMobile, navOpen, closeNav, mode]);

  const handleNavigate = useCallback(
    (key: string, opts?: NavigateOptions) => {
      onNavigate(key, opts);
      if (isMobile) closeNav();
    },
    [onNavigate, isMobile, closeNav],
  );

  const drawer = isMobile;
  return (
    <AppShell
      layout="alt"
      mode={mode}
      padding={0}
      withBorder={false}
      navbar={{
        width: sidebarWidth,
        breakpoint: forceMobile ? 100000 : 'md',
        collapsed: { mobile: !navOpen, desktop: false },
      }}
      className={clsx(classes.root, className)}
      data-drawer={drawer || undefined}
      data-nav-open={(drawer && navOpen) || undefined}
      {...others}
    >
      {drawer && (
        <button
          type="button"
          className={classes.backdrop}
          aria-label="Fechar menu de navegação"
          onClick={closeNav}
          tabIndex={navOpen ? 0 : -1}
          aria-hidden={!navOpen}
        />
      )}
      <AppShell.Navbar className={classes.navbar} inert={drawer && !navOpen ? true : undefined}>
        <AppSidebar
          perspective={perspective}
          activeKey={activeKey}
          onNavigate={handleNavigate}
          primary={primary}
          width={sidebarWidth}
          perspectiveOptions={switcher?.options}
          onSwitchPerspective={switcher?.onSwitch}
          isDrawer={drawer}
          onClose={closeNav}
          {...sidebarProps}
          id={sidebarId}
        />
      </AppShell.Navbar>
      <AppShell.Main className={classes.main}>
        <AppHeader
          title={headerTitle}
          subtitle={headerSubtitle}
          breadcrumb={breadcrumb}
          user={perspective.user}
          showMenuButton={drawer}
          menuOpen={navOpen}
          onMenuToggle={toggleNav}
          menuControls={sidebarId}
          {...headerProps}
        />
        <div className={clsx(classes.content, contentClassName)} style={contentStyle}>
          {children}
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
ConnectShell.displayName = '@jcdecor/connect-ui/ConnectShell';
