import { ChildrenType, StylesType } from 'global/types';

import { Wrapper } from './styles';

interface Props extends ChildrenType, StylesType {}

const Card = ({ styles, children }: Props) => {
  return <Wrapper styles={styles}>{children}</Wrapper>;
};

export default Card;
