import ADIcon from '@/assets/icons/arrow-down.svg';
import magnifierIcon from '@/assets/icons/magnifier.svg';
import styled from 'styled-components';

type Props = {
  rotateArrow: boolean;
};

export const ArrowDown = styled.i`
  content: url(${ADIcon});
  height: 15px;
  width: 15px;
  ${(props: Props) => props.rotateArrow && 'transform: rotate(180deg)'};
`;

export const CreateProduct = styled.p`
  width: fit-content;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: var(--bs-blue);
  cursor: pointer;
  user-select: none;
`;

export const FilterInput = styled.input`
  max-width: 80vw;
  background: url(${magnifierIcon});
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 10px;
  border: solid 3px var(--bs-gray-500);
  border-radius: 20px;
  left: 0;
  padding: 5px 5px 5px 50px;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
`;
