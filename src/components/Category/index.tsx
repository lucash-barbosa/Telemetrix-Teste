import { StylesType } from '@/global/types';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';
import generateRandomColor from '@/utils/generateRandomColor';
import { useMemo } from 'react';

import { CategoryText } from './styles';

interface Props extends StylesType {
  text?: string;
}

const colorMap: Record<string, string> = {};

const Category = ({ text, styles }: Props) => {
  const color = useMemo(() => {
    if (text) {
      if (text && !colorMap[text]) {
        colorMap[text] = generateRandomColor();
      }
      return colorMap[text];
    }
  }, [text]);

  return text ? (
    <CategoryText styles={styles} color={color}>
      {firstLetterToUppercase(text)}
    </CategoryText>
  ) : null;
};

export default Category;
