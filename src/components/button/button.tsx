import React, { FC } from 'react';

import { buttonSizes } from './button.model';
import { StyledButton } from './button.styled';

interface ButtonProps {
  size?: buttonSizes;
}

export const Button: FC<ButtonProps> = ({ size = 'default', children }) => (
  <StyledButton size={size}>{children}</StyledButton>
);
