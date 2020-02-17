import { select } from '@storybook/addon-knobs';
import React from 'react';

import { Button } from './button';

export default {
  title: 'Simple Components/Button',
  component: Button,
};

export const ControlledWithKnobs = () => (
  <Button
    size={select('Size', ['small', 'default', 'large', 'xlarge'], 'default')}
  >
    This is a button
  </Button>
);
export const Small = () => <Button size="small">This is a button</Button>;
export const Default = () => <Button>This is a button</Button>;
export const Large = () => <Button size="large">This is a button</Button>;
export const ExtraLarge = () => <Button size="xlarge">This is a button</Button>;
