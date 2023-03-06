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
  width: fit-content;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
`;

export const ArrowDown = styled.i`
  content: url(${ADIcon});
  height: 15px;
  width: 15px;
  ${(props: Props) =>
    props.rotateArrow === 'asc' && 'transform: rotate(180deg)'};
`;
