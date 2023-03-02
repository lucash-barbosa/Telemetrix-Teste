import { useMemo } from 'react';

import { CategoryText } from './styles';

type Props = {
  text: string;
};

const colorMap: { [key: string]: string } = {};

const Category = ({ text }: Props) => {
  const color = useMemo(() => {
    if (!colorMap[text]) {
      colorMap[text] = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    return colorMap[text];
  }, [text]);

  return <CategoryText color={color}>{text}</CategoryText>;
};

export default Category;
