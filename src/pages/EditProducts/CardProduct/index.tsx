import deleteIcon from '@/assets/icons/delete.svg';
import editIcon from '@/assets/icons/edit.svg';
import Card from '@/components/Card';
import Category from '@/components/Category';
import IconButton from '@/components/IconButton';
import useFindProductCategory from '@/hooks/productCategory/useFindProductCategory';
import { useState } from 'react';

import CardEditProduct from '../CardEditProduct';
import { ButtonsWrapper, CardText, CardTitle } from './styles';

type Props = {
  handleEdit: () => void;
  handleDelete: () => void;
  productCategoryId: number;
  productId: number;
  title: string;
  text: string;
};

const CardProduct = ({
  productId,
  productCategoryId,
  handleDelete,
  text,
  title,
}: Props) => {
  const cardStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 0.1fr',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas:
      '\'card-title card-category gap buttons-card\' \'card-description card-category gap buttons-card\'',
    margin: '40px 20px',
    gap: '10px 20px',
    textAlign: 'left',
  };

  const [editMode, setEditMode] = useState(false);

  const category = useFindProductCategory(productCategoryId);

  if (editMode) {
    return (
      <CardEditProduct
        id={productId}
        name={title}
        description={text}
        category={category}
        toggleEditMode={() => setEditMode(false)}
      />
    );
  }

  return (
    <Card styles={cardStyles}>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <Category text={category?.name} styles={{ gridArea: 'card-category' }} />
      <ButtonsWrapper>
        <IconButton
          icon={editIcon}
          onClick={() => setEditMode(true)}
          hover={{ width: '30px', height: '30px' }}
        />
        <IconButton
          icon={deleteIcon}
          onClick={handleDelete}
          hover={{ width: '30px', height: '30px' }}
        />
      </ButtonsWrapper>
    </Card>
  );
};

export default CardProduct;
