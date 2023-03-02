import styled from 'styled-components';

import confirmIcon from '../../assets/icons/confirme.svg';

export const Card = styled.div`
  display: grid;
  align-items: center;
  row-gap: 10px;

  grid-template-columns: 1.1fr 1fr 0.1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'card-title card-category confirm'
    'card-description card-category confirm ';

  margin: 40px 20px;
  padding: 35px 40px 30px 40px;
  text-align: left;
  border-radius: 6px;
  box-shadow: #00000015 2px 5px 20px;
  background-color: #fff;
`;

export const CardTitle = styled.input`
  border: none;
  grid-area: card-title;
  color: var(--bs-gray-900);
  font-size: 26px;
  font-weight: 800;

  &:focus {
    outline: none;
  }
`;

export const CardText = styled(CardTitle)`
  grid-area: card-description;
  font-size: 14px;
  font-weight: 600;
`;

export const ConfirmButton = styled.button`
  grid-area: confirm;
  height: 35px;
  width: 35px;
  border: none;
  justify-self: center;
  align-self: center;

  background-color: transparent;
  background-image: url(${confirmIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;
