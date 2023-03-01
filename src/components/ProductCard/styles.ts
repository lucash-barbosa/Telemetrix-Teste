import styled from 'styled-components';

export const Card = styled.li`
  display: grid;
  align-items: center;
  row-gap: 5px;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'card-title card-category edit-card'
    'card-description card-category delete-card';

  margin: 40px 20px;
  padding: 35px 40px 30px 40px;
  text-align: left;
  border-radius: 6px;
  box-shadow: #00000015 2px 5px 20px;
  background-color: #fff;
`;

export const CardTitle = styled.h3`
  grid-area: card-title;
  font-size: 26px;
  font-weight: 800;
`;

export const CardText = styled.p`
  grid-area: card-description;
  color: var(--bs-gray-700);
  font-size: 14px;
  font-weight: 600;
`;
