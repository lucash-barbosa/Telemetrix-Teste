import styled from 'styled-components';

import ADIcon from '../../assets/icons/arrow-down.svg';

type Props = {
  rotateArrow: boolean;
};

export const AddProduct = styled.p`
  width: fit-content;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: var(--bs-blue);
  cursor: pointer;
  user-select: none;
`;

export const ArrowDown = styled.i`
  content: url(${ADIcon});
  height: 15px;
  width: 15px;
  ${(props: Props) => props.rotateArrow && 'transform: rotate(180deg)'};
`;
