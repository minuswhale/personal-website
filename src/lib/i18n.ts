// Trilingual date formatting helper.
const fmt = (locale: string) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

const formatters = {
  en: fmt('en-US'),
  'zh-CN': fmt('zh-CN'),
  'zh-TW': fmt('zh-TW'),
} as const;

export type Lang = keyof typeof formatters;

/** Returns { en, cn, tw } display strings for a date. */
export function trilingualDate(date: Date) {
  return {
    en: formatters['en'].format(date),
    cn: formatters['zh-CN'].format(date),
    tw: formatters['zh-TW'].format(date),
  };
}

/** Padded index like `003`. */
export function postIndex(total: number, position: number) {
  return String(total - position).padStart(3, '0');
}
