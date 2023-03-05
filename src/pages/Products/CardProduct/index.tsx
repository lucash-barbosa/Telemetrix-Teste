import deleteIcon from '@/assets/icons/delete.svg';
import editIcon from '@/assets/icons/edit.svg';
import Card from '@/components/Card';
import Category from '@/components/Category';
import IconButton from '@/components/IconButton';
import useFindProductCategory from '@/hooks/productCategory/useFindProductCategory';
import { useState } from 'react';

import CardEditProduct from '../CardEditProduct';
import { CardText, CardTitle } from './styles';

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
    gridTemplateColumns: '1.1fr 1fr 0.1fr 0.1fr',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas:
      '\'card-title card-category edit-card delete-card\' \'card-description card-category edit-card delete-card\'',
    margin: '40px 20px',
    rowGap: '10px',
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
      <Category
        text={category?.name}
        styles={{ gridArea: 'card-category', gridColumnStart: '1' }}
      />
      <IconButton
        icon={editIcon}
        onClick={() => setEditMode(true)}
        styles={{ gridArea: 'edit-card' }}
      />
      <IconButton
        icon={deleteIcon}
        onClick={handleDelete}
        styles={{ gridArea: 'delete-card' }}
      />
    </Card>
  );
};

export default CardProduct;
