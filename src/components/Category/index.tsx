import { ReactNode } from 'react';
import { CategoryText } from './styles';

type Props = {
  children: ReactNode;
};

const Category = ({ children }: Props) => {
  return <CategoryText>{children}</CategoryText>;
};

export default Category;
