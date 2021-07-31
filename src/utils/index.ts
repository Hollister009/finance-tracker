import { CURRENCY_SYMBOLS } from '../constants';
import { CurrencyFormatterInput } from '../types';

const formatter = new Intl.NumberFormat('en-US', { style: 'decimal' });

const monoFormatterRe = /([,])|([.])/g;
const monoFormatterReReplacer = (match: string, $1?: string, $2?: string) => {
  if ($1 === ',') return ' ';
  if ($2 === '.') return ',';
  return match;
};

// Monobank formatting style
// 2735.5 -> 2 735,5 ₴
export const monoFormatCurrency = ({
  value,
  currency = 'UAH',
}: CurrencyFormatterInput): string =>
  `${formatter
    .format(value)
    .replace(monoFormatterRe, monoFormatterReReplacer)} ${
    CURRENCY_SYMBOLS[currency]
  }`;

// Regular formatting style
// 49778 -> $49,778
export const regularFormatCurrency = ({
  value,
  currency = 'UAH',
}: CurrencyFormatterInput): string =>
  `${CURRENCY_SYMBOLS[currency]}${formatter.format(value)}`;
