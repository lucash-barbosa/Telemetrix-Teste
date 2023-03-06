import styled from 'styled-components';

export const CardTextInput = styled.input`
  color: var(--bs-gray-700);
  font-size: 14px;
  font-weight: 600;
  grid-area: card-description;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CardTitleInput = styled.input`
  color: var(--bs-gray-900);
  font-size: 26px;
  font-weight: 800;
  grid-area: card-title;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
