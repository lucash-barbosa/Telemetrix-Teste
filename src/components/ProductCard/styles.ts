import styled from 'styled-components';

import editIcon from '../../assets/icons/edit.svg';
import GarbageIcon from '../../assets/icons/garbage.svg';

export const Card = styled.div`
  display: grid;
  align-items: center;
  row-gap: 10px;

  grid-template-columns: 1.1fr 1fr 0.1fr 0.1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'card-title card-category edit-card delete-card'
    'card-description card-category edit-card delete-card';

  margin: 40px 20px;
  padding: 35px 40px 30px 40px;
  text-align: left;
  border-radius: 6px;
  box-shadow: #00000015 2px 5px 20px;
  background-color: #fff;
`;

export const CardTitle = styled.h3`
  grid-area: card-title;
  color: var(--bs-gray-900);
  font-size: 26px;
  font-weight: 800;
`;

export const CardText = styled.p`
  grid-area: card-description;
  color: var(--bs-gray-700);
  font-size: 14px;
  font-weight: 600;
`;

export const EditButton = styled.button`
  height: 25px;
  width: 25px;
  border: none;
  justify-self: center;
  align-self: center;
  grid-area: edit-card;

  background-color: transparent;
  background-image: url(${editIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DeleteButton = styled(EditButton)`
  grid-area: delete-card;
  background-image: url(${GarbageIcon});
`;

// EditMode

export const EditCard = styled.div`
  display: grid;
  align-items: center;
  row-gap: 10px;

  grid-template-columns: 1.1fr 1fr 0.1fr 0.1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'card-title card-category edit-card delete-card'
    'card-description card-category edit-card delete-card';

  margin: 40px 20px;
  padding: 35px 40px 30px 40px;
  text-align: left;
  border-radius: 6px;
  box-shadow: #00000015 2px 5px 20px;
  background-color: #fff;
`;

export const EditCardTitle = styled.input`
  border: none;
  grid-area: card-title;
  font-size: 26px;
  font-weight: 800;

  &:focus {
    outline: none;
  }
`;

export const EditCardText = styled(EditCardTitle)`
  grid-area: card-description;
  font-size: 14px;
  font-weight: 600;
`;

export const EditDeleteButton = styled(EditButton)`
  grid-area: delete-card;
  background-image: url(${GarbageIcon});
`;
