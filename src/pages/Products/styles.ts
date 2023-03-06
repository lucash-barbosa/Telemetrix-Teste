import ADIcon from '@/assets/icons/arrow-down.svg';
import magnifierIcon from '@/assets/icons/magnifier.svg';
import styled from 'styled-components';

type Props = {
  rotateArrow: 'asc' | 'desc';
};

export const ProductsWrapper = styled.li`
  display: inline-block;
  width: fit-content;
`;

export const FilterButton = styled.button`
  color: var(--bs-blue);
  font-size: 20px;
  font-weight: 700;
  background-color: var(--bs-white);
  border: solid 3px var(--bs-blue);
  border-radius: 10px;
  padding: 5px;
  height: fit-content;
`;

export const FilterInput = styled.input`
  background: url(${magnifierIcon});
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 10px;
  border: solid 3px var(--bs-gray-500);
  border-radius: 20px;
  left: 0;
  margin-bottom: 50px;
  padding: 5px 5px 5px 50px;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowDown = styled.i`
  content: url(${ADIcon});
  height: 15px;
  width: 15px;
  ${(props: Props) =>
    props.rotateArrow === 'asc' && 'transform: rotate(180deg)'};
`;
