import styled from 'styled-components';

export const CategoryText = styled.p`
  grid-area: card-category;
  grid-column-start: 1;
  justify-self: center;
  width: fit-content;
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  padding: 0.5em 1em;
  border: solid ${(props) => props.color} 2px;
  border-radius: 6px;
`;
