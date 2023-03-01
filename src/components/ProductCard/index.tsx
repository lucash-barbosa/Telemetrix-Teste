import { DeleteProduct } from '../../api/Products';
import Category from '../Category';
import { Card, CardText, CardTitle, DeleteButton, EditButton } from './styles';

type Props = {
  id: number;
  name: string;
  description: string;
  productCategory?: string;
};

const ProductCard = ({ id, name, description, productCategory }: Props) => {
  const deleteProductMutation = DeleteProduct();

  const handleDelete = () => {
    deleteProductMutation.mutate(id);
  };

  return (
    <Card>
      <CardTitle>{name[0].toUpperCase() + name.substring(1)}</CardTitle>
      <CardText>
        {description[0].toUpperCase() + description.substring(1)}
      </CardText>
      {productCategory && <Category>{productCategory}</Category>}
      <EditButton />
      <DeleteButton onClick={handleDelete} />
    </Card>
  );
};

export default ProductCard;
