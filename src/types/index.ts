export enum WalletType {
  cash = 'cash',
  card = 'card',
  account = 'account',
  deposit = 'deposit'
}

type CurrencyCode = 'UAH' | 'USD' | 'EUR';

export type IWalletDTO = {
  id: number;
  type: WalletType | string;
  balance: number;
  currency: CurrencyCode | string;
};
