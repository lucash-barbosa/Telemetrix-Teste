import confirmIcon from '@/assets/icons/confirm.svg';
import Card from '@/components/Card';
import IconButton from '@/components/IconButton';
import { ProductCategoryType } from '@/global/types';
import useEditProduct from '@/hooks/product/useEditProduct';
import { useState, useRef } from 'react';

import ProductCategoryDropdown from '../Dropdown';
import { CardTextInput, CardTitleInput } from './styles';

interface Props extends ProductCategoryType {
  category?: ProductCategoryType;
  toggleEditMode: () => void;
}

const CardEditProduct = ({
  id,
  name,
  description,
  category: oldCategory,
  toggleEditMode,
}: Props) => {
  const cardStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 0.3fr',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas:
      '\'card-title card-category gap buttons-card\' \'card-description card-category gap buttons-card\'',
    margin: '40px 20px',
    gap: '10px 20px',
    textAlign: 'left',
  };

  const [category, setCategory] = useState<ProductCategoryType>();

  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const editProduct = useEditProduct();

  const handleSelect = ({ id, name, description }: ProductCategoryType) => {
    setCategory({ id, name, description });
  };

  const handleEdit = () => {
    if (titleRef.current?.value || textRef.current?.value || category?.id) {
      editProduct({
        id,
        name: titleRef.current?.value || name,
        description: textRef.current?.value || description,
        categoryId: category?.id || oldCategory?.id,
      });
    }
    toggleEditMode();
  };

  return (
    <Card styles={cardStyles}>
      <CardTitleInput ref={titleRef} placeholder={name} />
      <CardTextInput ref={textRef} placeholder={description} />

      <ProductCategoryDropdown
        category={category}
        oldCategory={oldCategory}
        handleSelect={handleSelect}
      />

      <IconButton
        icon={confirmIcon}
        onClick={handleEdit}
        styles={{ gridArea: 'buttons-card', width: '35px', height: '35px' }}
        hover={{ width: '40px', height: '40px' }}
      />
    </Card>
  );
};

export default CardEditProduct;
