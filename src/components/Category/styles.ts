import { StylesType } from '@/global/types';
import styled from 'styled-components';

export const CategoryText = styled.p`
  justify-self: center;
  width: fit-content;
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  padding: 0.5em 1em;
  border-color: ${(props) => props.color};
  border: solid 2px;
  border-radius: 6px;

  ${(prop: StylesType) => prop.styles}
`;
