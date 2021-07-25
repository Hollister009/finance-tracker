import React from 'react';
import { IWalletDTO } from '../../types';

export interface PieChartProps {
  wallets: IWalletDTO[];
}

const PieChart = (props: PieChartProps) => {
  const { wallets = [] } = props;

  const renderItem = (item: IWalletDTO) => (
    <li key={item.id}>{`${item.balance}|${item.currency}|${item.type}`}</li>
  );

  return <ul>{wallets.map(renderItem)}</ul>;
};

export default PieChart;
