import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import data from '../../../db/data.json';
import CircularBalance from './index';

export default {
  title: 'components/CircularBalance',
  component: CircularBalance
} as ComponentMeta<typeof CircularBalance>

const Template: ComponentStory<typeof CircularBalance> = (args) => <CircularBalance {...args} />;

export const Default = Template.bind({});
Default.args = {
  wallets: data
}
Default.storyName = 'CircularBalance';