import { useRef } from 'react';

import { AddProduct } from '../../api/Products';
import { Card, CardTitle, CardText, ConfirmButton } from './styles';

const AddProductCard = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const addProductMutation = AddProduct();

  const handleAddProduct = () => {
    const name = titleRef.current?.value;
    const description = textRef.current?.value;

    if (name && description && name.length > 1 && description?.length > 1) {
      addProductMutation.mutate({
        data: {
          name: titleRef.current.value,
          description: textRef.current.value,
        },
      });
      titleRef.current.value = '';
      textRef.current.value = '';
    }
  };

  return (
    <Card>
      <CardTitle ref={titleRef} placeholder="Nome do Produto" />
      <CardText ref={textRef} placeholder="Descrição do produto" />
      <ConfirmButton onClick={handleAddProduct} />
    </Card>
  );
};

export default AddProductCard;
