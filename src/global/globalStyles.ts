import styled, { createGlobalStyle } from 'styled-components';

import { resetStyles } from './resetStyles';

export default createGlobalStyle`
  ${resetStyles};

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 400;
    background-color: var(--bs-gray-100);
  };

  ::-webkit-scrollbar {
    width: 8px;
  };
  
  ::-webkit-scrollbar-track {
    background: #dddddd;
    width: 5px;
  };

  ::-webkit-scrollbar-thumb {
    background: #999999;
    border-radius: 20px;
  };
`;

export const Button = styled.button`
  align-self: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  height: 25px;
  width: 25px;
  justify-self: center;
`;

export const Container = styled.div`
  text-align: center;
  margin: 0 5%;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 900;
  color: var(--bs-gray-900);
  margin: 75px 0 100px 0;
`;

export const Wrapper = styled.section`
  margin: 20px 0;
`;
