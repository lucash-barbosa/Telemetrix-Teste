import confirmIcon from '@/assets/icons/confirm.svg';
import Card from '@/components/Card';
import IconButton from '@/components/IconButton';
import { ProductCategoryType } from '@/global/types';
import useCreateProduct from '@/hooks/product/useCreateProduct';
import { useState, useRef } from 'react';

import ProductCategoryDropdown from '../Dropdown';
import { CardTextInput, CardTitleInput } from './styles';

type Props = {
  hideCardCreateProduct: () => void;
};

const CardCreateProduct = ({ hideCardCreateProduct }: Props) => {
  const cardStyles = {
    gridTemplateColumns: '1.1fr 1fr 0.1fr 0.1fr',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas:
      '\'card-title card-category confirm-card\' \'card-description card-category confirm-card\'',
    margin: '40px 20px',
    rowGap: '10px',
  };

  const [category, setCategory] = useState<ProductCategoryType>();

  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const createProduct = useCreateProduct();

  const handleSelect = ({ id, name, description }: ProductCategoryType) => {
    setCategory({ id, name, description });
  };

  const handleCreate = () => {
    if (titleRef.current?.value && textRef.current?.value && category?.id) {
      createProduct({
        name: titleRef.current.value,
        description: textRef.current.value,
        categoryId: category.id,
      });

      titleRef.current.value = '';
      textRef.current.value = '';
      setCategory(undefined);

      hideCardCreateProduct();
    }
  };

  return (
    <Card styles={cardStyles}>
      <CardTitleInput ref={titleRef} placeholder="Nome do produto" />
      <CardTextInput ref={textRef} placeholder="Descrição do produto" />

      <ProductCategoryDropdown
        category={category}
        handleSelect={handleSelect}
      />

      <IconButton
        icon={confirmIcon}
        onClick={handleCreate}
        styles={{ gridArea: 'confirm-card', width: '35px', height: '35px' }}
        hover={{ width: '40px', height: '40px' }}
      />
    </Card>
  );
};

export default CardCreateProduct;
