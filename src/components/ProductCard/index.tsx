import { useRef, useState } from 'react';

import { DeleteProduct, EditProduct } from '../../api/Products';
import Category from '../Category';
import {
  Card,
  CardText,
  CardTitle,
  DeleteButton,
  EditButton,
  EditCard,
  EditCardText,
  EditCardTitle,
} from './styles';

type Props = {
  id: number;
  name: string;
  description: string;
  productCategory?: string;
};

const ProductCard = ({ id, name, description, productCategory }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const deleteProductMutation = DeleteProduct();
  const editProductMutation = EditProduct();

  const handleDelete = () => {
    deleteProductMutation.mutate(id);
  };

  const handleEdit = () => {
    const name = titleRef.current?.value;
    const description = textRef.current?.value;

    if (name && description && name.length > 1 && description?.length > 1) {
      editProductMutation.mutate({
        id,
        data: {
          name: titleRef.current.value,
          description: textRef.current.value,
        },
      });

      console.log(titleRef.current.value);
    }
  };

  return !editMode ? (
    <Card>
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
      {productCategory && <Category text={productCategory}></Category>}
      <EditButton onClick={() => setEditMode(!editMode)} />
      <DeleteButton onClick={handleDelete} />
    </Card>
  ) : (
    <EditCard>
      <EditCardTitle ref={titleRef} placeholder={name} />
      <EditCardText ref={textRef} placeholder={description} />
      <EditButton
        onClick={() => {
          handleEdit();
          setEditMode(!editMode);
        }}
      />
      <DeleteButton onClick={handleDelete} />
    </EditCard>
  );
};

export default ProductCard;
