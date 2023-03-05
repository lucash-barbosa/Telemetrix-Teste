import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';

export const Input = styled.input`
  font-weight: 600;
  text-align: center;
  border: solid 3px var(--bs-gray-200);
  border-radius: 5px;
  color: var(--bs-gray-900);
  padding: 10px 0;
  margin: 5px 0 5px 0;

  ::placeholder {
    color: var(--bs-gray-800);
    font-weight: 600;
  }
`;

export const ItemWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 12px;
  border: solid 3px var(--bs-gray-200);
  border-radius: 5px;
`;

export const StyledDropdown = styled(Dropdown)`
  grid-area: card-category;
  grid-column-start: 1;
`;

export const StyledDropdownButton = styled(Dropdown.Toggle)`
  padding: 0.5em 1em;
`;

export const StyledDropdownInputItem = styled(Dropdown.Item)`
  &:hover {
    background-color: transparent;
  }
`;

export const StyledDropdownItem = styled(Dropdown.Item)`
  display: inline-block;
  text-align: center;
  font-weight: 600;
  padding: 11px 0;
  width: 90%;
  border-right: solid 3px var(--bs-gray-200);
`;
