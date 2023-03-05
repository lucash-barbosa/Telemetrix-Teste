import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';

export const ItemWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 12px;
  border: solid 3px var(--bs-gray-200);
  border-radius: 5px;
`;

export const StyledDropdownItem = styled(Dropdown.Item)`
  display: inline-block;
  text-align: center;
  font-weight: 600;
  padding: 11px 30px;
  width: 70%;
  border-right: solid 3px var(--bs-gray-200);
  border-left: solid 3px var(--bs-gray-200);
`;
