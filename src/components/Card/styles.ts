import { StylesType } from '@/global/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: #00000015 2px 5px 20px;
  display: grid;
  padding: 40px;

  ${(props: StylesType) => props.styles}
`;
