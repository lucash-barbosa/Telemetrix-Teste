import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 70px;
  background-color: #f0f0f0;
`;

export const Item = styled(Link)`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const LinksWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  column-gap: 10vw;
  margin: 0 50px;
`;
