import styled from 'styled-components';
import tw from 'tailwind.macro';

import { buttonSizes } from './button.model';

interface StyledButtonProps {
  readonly size: buttonSizes;
}

const sizeStyles = {
  small: tw`text-xs py-4 px-3`,
  default: tw`text-base py-4 px-4`,
  large: tw`text-lg py-5 px-5`,
  xlarge: tw`text-3xl py-5 px-5`,
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${tw`bg-blue-800 rounded text-white hover:bg-blue-700`}
  ${props => sizeStyles[props.size]}
`;
