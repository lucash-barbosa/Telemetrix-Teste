import styled from 'styled-components';

const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

export const CategoryText = styled.p`
  grid-area: card-category;
  width: fit-content;
  justify-self: center;
  color: ${randomColor};
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  padding: 0.5em 1em;
  border: solid ${randomColor} 2px;
  border-radius: 6px;
`;
