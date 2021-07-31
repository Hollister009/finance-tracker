import { CURRENCY_SYMBOLS } from '../constants';
import { CurrencyCode } from '../types';

const formatter = new Intl.NumberFormat('en-US', { style: 'decimal' });

type FormatInput = {
  value: number;
  currency?: CurrencyCode;
};

// Regular formatting style
// 49778 -> $49,778
const regularFormatCurrency = ({
  value,
  currency = 'UAH',
}: FormatInput): string =>
  `${CURRENCY_SYMBOLS[currency]}${formatter.format(value)}`;

// Monobank formatting style
// 2735.5 -> 2 735,5 ₴
const monoFormatterRe = /([,])|([.])/g;
const monoFormatterReReplacer = (match: string, $1?: string, $2?: string) => {
  if ($1 === ',') return ' ';
  if ($2 === '.') return ',';
  return match;
};

export const monoFormatCurrencyValue = ({
  value,
  currency = 'UAH',
}: FormatInput): string =>
  `${formatter
    .format(value)
    .replace(monoFormatterRe, monoFormatterReReplacer)} ${
    CURRENCY_SYMBOLS[currency]
  }`;
