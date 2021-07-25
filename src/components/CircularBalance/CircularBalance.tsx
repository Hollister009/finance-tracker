import React from 'react';
import { PieChart } from 'reaviz';
import { IWalletDTO } from '../../types';

import classes from './CircularBalance.module.css';

export interface CircularBalanceProps {
  wallets: IWalletDTO[];
}

const CircularBalance = (props: CircularBalanceProps) => {
  const { wallets = [] } = props;

  const transformedData = wallets.map((item) => ({
    key: item.type,
    data: item.balance,
  }));

  const accumulatedBalance = wallets.reduce(
    (acc, { balance }) => acc + balance,
    0
  );

  return (
    <div className={classes.container}>
      <p className={classes.totalBalance}>
        {accumulatedBalance} UAH
      </p>
      <PieChart width={300} height={300} data={transformedData} />
    </div>
  );
};

export default CircularBalance;
