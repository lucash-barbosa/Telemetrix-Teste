import Card from '@/components/Card';
import Category from '@/components/Category';
import useFindProductCategory from '@/hooks/productCategory/useFindProductCategory';

import { CardText, CardTitle } from './styles';

type Props = {
  productCategoryId: number;
  title: string;
  text: string;
};

const CardProduct = ({ productCategoryId, text, title }: Props) => {
  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '30px',
    margin: '40px 20px',
  };

  const category = useFindProductCategory(productCategoryId);

  return (
    <Card styles={cardStyles}>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <Category text={category?.name} />
    </Card>
  );
};

export default CardProduct;
