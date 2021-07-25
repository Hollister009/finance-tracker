import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import data from '../../../db/data.json';
import PieChart from './PieChart';

export default {
  title: 'components/PieChart',
  component: PieChart
} as ComponentMeta<typeof PieChart>

const Template: ComponentStory<typeof PieChart> = (args) => <PieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  wallets: data
}
Default.storyName = 'PieChart';