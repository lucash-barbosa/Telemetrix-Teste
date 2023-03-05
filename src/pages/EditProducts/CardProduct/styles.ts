import styled from 'styled-components';

export const CardText = styled.p`
  color: var(--bs-gray-700);
  font-size: 14px;
  font-weight: 600;
  grid-area: card-description;
`;

export const CardTitle = styled.h3`
  color: var(--bs-gray-900);
  font-size: 26px;
  font-weight: 800;
  grid-area: card-title;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  grid-area: buttons-card;
`;
