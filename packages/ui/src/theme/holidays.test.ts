import { getActiveHolidayFlavor, getEasterSunday, HOLIDAY_WINDOWS } from './holidays';

describe('getEasterSunday', () => {
  it.each([
    [2023, 4, 9],
    [2024, 3, 31],
    [2025, 4, 20],
    [2026, 4, 5],
    [2027, 3, 28],
    [2028, 4, 16],
  ])('%s -> %s/%s', (year, month, day) => {
    const easter = getEasterSunday(year);
    expect(easter.getMonth() + 1).toBe(month);
    expect(easter.getDate()).toBe(day);
  });
});

describe('HOLIDAY_WINDOWS', () => {
  it('festaJunina cobre junho inteiro', () => {
    const { start, end } = HOLIDAY_WINDOWS.festaJunina(2026);
    expect([start.getMonth(), start.getDate()]).toEqual([5, 1]);
    expect([end.getMonth(), end.getDate()]).toEqual([5, 30]);
  });

  it('independencia cobre 1-7 de setembro', () => {
    const { start, end } = HOLIDAY_WINDOWS.independencia(2026);
    expect([start.getMonth(), start.getDate()]).toEqual([8, 1]);
    expect([end.getMonth(), end.getDate()]).toEqual([8, 7]);
  });

  it('christmas cobre 1-25 de dezembro', () => {
    const { start, end } = HOLIDAY_WINDOWS.christmas(2026);
    expect([start.getMonth(), start.getDate()]).toEqual([11, 1]);
    expect([end.getMonth(), end.getDate()]).toEqual([11, 25]);
  });

  it('carnaval termina na quarta-feira de cinzas (46 dias antes da páscoa)', () => {
    const easter = getEasterSunday(2026);
    const { end } = HOLIDAY_WINDOWS.carnaval(2026);
    const diffDays = Math.round((easter.getTime() - end.getTime()) / 86_400_000);
    expect(diffDays).toBe(46);
  });

  it('janelas não se sobrepõem entre si em nenhum ano de 2024 a 2030', () => {
    for (let year = 2024; year <= 2030; year++) {
      const windows = Object.values(HOLIDAY_WINDOWS).map((fn) => fn(year)).sort((a, b) => a.start.getTime() - b.start.getTime());
      for (let i = 1; i < windows.length; i++) {
        expect(windows[i].start.getTime()).toBeGreaterThan(windows[i - 1].end.getTime());
      }
    }
  });
});

describe('getActiveHolidayFlavor', () => {
  it('retorna null fora de qualquer janela', () => {
    expect(getActiveHolidayFlavor(new Date(2026, 0, 15))).toBeNull();
  });

  it('detecta o Natal em 10/dez', () => {
    expect(getActiveHolidayFlavor(new Date(2026, 11, 10))).toBe('christmas');
  });

  it('detecta a Festa Junina em 24/jun', () => {
    expect(getActiveHolidayFlavor(new Date(2026, 5, 24))).toBe('festaJunina');
  });

  it('detecta a Independência em 7/set', () => {
    expect(getActiveHolidayFlavor(new Date(2026, 8, 7))).toBe('independencia');
  });

  it('detecta o Carnaval e a Páscoa respeitando a janela móvel de 2026', () => {
    const easter = getEasterSunday(2026);
    expect(getActiveHolidayFlavor(new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() - 49))).toBe('carnaval');
    expect(getActiveHolidayFlavor(easter)).toBe('pascoa');
  });

  it('inclui os extremos da janela (inclusivo)', () => {
    expect(getActiveHolidayFlavor(new Date(2026, 11, 1))).toBe('christmas');
    expect(getActiveHolidayFlavor(new Date(2026, 11, 25))).toBe('christmas');
    expect(getActiveHolidayFlavor(new Date(2026, 11, 26))).toBeNull();
  });
});
