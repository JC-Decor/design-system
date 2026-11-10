// @generated sincronizado de packages/ui/src/theme/holidays.ts — edite lá e rode `npm run sync -w @jcdecor/vue`
/**
 * Datas comemorativas brasileiras com tema visual próprio — fonte única usada por
 * `JcProvider`/`ConnectProvider` para decidir, a partir da data de hoje, qual (se algum)
 * `data-theme-flavor` fica ativo (ver `styles/<flavor>.css` e os blocos `::after` em
 * `TopNav.module.css`/`AppHeader.module.css`).
 *
 * Não há seletor manual entre feriados: no máximo um fica "na janela" em cada dia do ano.
 * `<ThemeFlavorToggle />` só liga/desliga o flavor ativo (ver `useThemeFlavor()`).
 */

export type HolidayFlavor = 'carnaval' | 'pascoa' | 'festaJunina' | 'independencia' | 'christmas';
export type ThemeFlavor = 'default' | HolidayFlavor;

export const HOLIDAY_FLAVORS: HolidayFlavor[] = ['carnaval', 'pascoa', 'festaJunina', 'independencia', 'christmas'];

export const HOLIDAY_LABELS: Record<HolidayFlavor, string> = {
  carnaval: 'Carnaval',
  pascoa: 'Páscoa',
  festaJunina: 'Festa Junina',
  independencia: 'Independência do Brasil',
  christmas: 'Natal',
};

function startOfDay(year: number, month0: number, day: number): Date {
  return new Date(year, month0, day, 0, 0, 0, 0);
}

function addDays(date: Date, days: number): Date {
  return startOfDay(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

/**
 * Domingo de Páscoa (calendário gregoriano, algoritmo de Computus/Meeus). Sempre entre
 * 22/mar e 25/abr — por isso as janelas derivadas (Carnaval, Páscoa) nunca cruzam o ano novo.
 */
export function getEasterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month0 = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 2 = março, 3 = abril
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return startOfDay(year, month0, day);
}

export interface HolidayWindow {
  start: Date;
  end: Date;
}

/**
 * Janela (inclusiva) de cada feriado para um dado ano. Carnaval e Páscoa são móveis
 * (derivados da Páscoa); os demais têm datas fixas no calendário.
 */
export const HOLIDAY_WINDOWS: Record<HolidayFlavor, (year: number) => HolidayWindow> = {
  // Sexta-feira antes da Quarta-feira de Cinzas (Páscoa − 52) até a própria Quarta-feira de Cinzas (Páscoa − 46).
  carnaval: (year) => {
    const easter = getEasterSunday(year);
    return { start: addDays(easter, -52), end: addDays(easter, -46) };
  },
  // Semana Santa: domingo de Ramos (Páscoa − 7) até o Domingo de Páscoa.
  pascoa: (year) => {
    const easter = getEasterSunday(year);
    return { start: addDays(easter, -7), end: easter };
  },
  festaJunina: (year) => ({ start: startOfDay(year, 5, 1), end: startOfDay(year, 5, 30) }),
  independencia: (year) => ({ start: startOfDay(year, 8, 1), end: startOfDay(year, 8, 7) }),
  christmas: (year) => ({ start: startOfDay(year, 11, 1), end: startOfDay(year, 11, 25) }),
};

/** Ordem de desempate (nunca deveriam se sobrepor — ver janelas acima). */
const PRIORITY: HolidayFlavor[] = ['carnaval', 'pascoa', 'festaJunina', 'independencia', 'christmas'];

/** Feriado "na janela" para a data informada, ou `null` fora de temporada. */
export function getActiveHolidayFlavor(date: Date): HolidayFlavor | null {
  const day = startOfDay(date.getFullYear(), date.getMonth(), date.getDate());
  for (const flavor of PRIORITY) {
    const window = HOLIDAY_WINDOWS[flavor](day.getFullYear());
    if (day >= window.start && day <= window.end) return flavor;
  }
  return null;
}
