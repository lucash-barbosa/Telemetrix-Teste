import { Button } from '@/global/globalStyles';
import styled from 'styled-components';

import { ButtonProps } from '.';
0;

export const StyledButton = styled(Button)`
  width: 25px;
  background-image: url(${(props: ButtonProps) => props.icon});

  ${(prop: ButtonProps) => prop.styles};

  &:hover {
    ${(props) => props.hover};
  }
`;
