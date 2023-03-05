import { StylesType } from '@/global/types';

import { StyledButton } from './styles';

export interface ButtonProps extends StylesType {
  icon: string;
  onClick?: () => void;
}

const IconButton = ({ icon, styles, onClick, hover }: ButtonProps) => {
  return (
    <StyledButton icon={icon} onClick={onClick} styles={styles} hover={hover} />
  );
};

export default IconButton;
