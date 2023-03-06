import { StylesType } from '@/global/types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: #00000015 2px 5px 20px;
  padding: 40px;

  ${(props: StylesType) => props.styles}

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 40px 20px;
    row-gap: 30px;
  }
`;
