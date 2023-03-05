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

export const StyledDropdown = styled(Dropdown)`
  grid-area: card-category;
  grid-column-start: 1;
`;

export const StyledDropdownButton = styled(Dropdown.Toggle)`
  padding: 0.5em 1em;
`;

export const StyledDropdownInputItem = styled(Dropdown.Item)`
  text-align: center;

  &:hover {
    background-color: transparent;
  }
`;
