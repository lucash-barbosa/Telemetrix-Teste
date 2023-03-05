import edit2Icon from '@/assets/icons/edit-2.svg';
import xIcon from '@/assets/icons/x.svg';
import IconButton from '@/components/IconButton';
import { ProductCategoryType } from '@/global/types';
import useDeleteProductCategory from '@/hooks/productCategory/useDeleteProductCategory';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';
import { useState } from 'react';

import EditItem from './EditItem';
import { ItemWrapper, StyledDropdownItem } from './styles';

type Props = {
  category: ProductCategoryType;
  handleSelect: (category: ProductCategoryType) => void;
};

const Item = ({ category, handleSelect }: Props) => {
  const [editCategoryMode, setEditCategoryMode] = useState(false);

  const deleteProductCategory = useDeleteProductCategory();

  return (
    <ItemWrapper>
      {editCategoryMode ? (
        <EditItem
          id={category.id}
          name={category.name}
          description={category.description}
          toggleEditMode={() => setEditCategoryMode(false)}
        />
      ) : (
        <>
          <IconButton
            icon={edit2Icon}
            onClick={() => setEditCategoryMode(true)}
            styles={{
              display: 'inline-block',
              width: '38px',
              height: '38px',
            }}
            hover={{ backgroundColor: '#e9ecef' }}
          />
          <StyledDropdownItem
            key={category.id}
            onClick={() =>
              handleSelect({
                id: category.id,
                name: category.name,
                description: category.description,
              })
            }
          >
            {firstLetterToUppercase(category.name)}
          </StyledDropdownItem>
          <IconButton
            icon={xIcon}
            onClick={() => deleteProductCategory(category.id)}
            styles={{
              display: 'inline-block',
              width: '38px',
              height: '38px',
            }}
            hover={{ backgroundColor: '#e9ecef' }}
          />
        </>
      )}
    </ItemWrapper>
  );
};

export default Item;
