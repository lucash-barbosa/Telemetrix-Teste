import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const CarouselItem = styled.div`
  width: fit-content;
  flex-shrink: 0;
  margin-right: 50px;
  user-select: none;
`;

export const Item = styled.p`
  justify-self: center;
  width: fit-content;
  color: var(--bs-gray-600);
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  padding: 0.5em 1em;
  border-color: var(--bs-gray-600);
  border: solid 2px;
  border-radius: 6px;

  &:hover {
    color: var(--bs-gray-800);
    border-color: var(--bs-gray-800);
  }
`;
