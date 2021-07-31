import React from 'react';
import { PieChart } from 'reaviz';
import { IWalletDTO, CurrencyFormatterInput } from 'types';
import { regularFormatCurrency } from 'utils';

import classes from './CircularBalance.module.css';

export interface CircularBalanceProps {
  wallets?: IWalletDTO[];
}

const CircularBalance = (props: CircularBalanceProps) => {
  const { wallets = [] } = props;

  const transformedData = wallets.map((item) => ({
    key: item.type,
    data: item.balance,
  }));

  const accumulatedBalance: CurrencyFormatterInput = {
    value: wallets.reduce((acc, { balance }) => acc + balance, 0),
    currency: wallets[0]?.currency,
  };

  if (!wallets.length) {
    return (
      <h2>The wallets data is Empty!</h2>
    )
  }

  return (
    <div className={classes.container}>
      <p className={classes.totalBalance}>
        {regularFormatCurrency(accumulatedBalance)}
      </p>
      <PieChart width={300} height={300} data={transformedData} />
    </div>
  );
};

export default CircularBalance;
