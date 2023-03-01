import Category from '../Category';
import { Card, CardText, CardTitle } from './styles';

type Props = {
  name: string;
  description: string;
  productCategory?: string;
  link: string;
};

const ProductCard = ({ name, description, productCategory, link }: Props) => {
  return (
    <Card to={link}>
      <CardTitle>{name[0].toUpperCase() + name.substring(1)}</CardTitle>
      <CardText>
        {description[0].toUpperCase() + description.substring(1)}
      </CardText>
      {productCategory && <Category>{productCategory}</Category>}
    </Card>
  );
};

export default ProductCard;
