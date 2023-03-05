import { ProductCategoryType } from '@/global/types';
import useCreateProductCategory from '@/hooks/productCategory/useCreateProductCategory';
import useGetProductCategories from '@/hooks/productCategory/useGetProductCategories';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';
import { useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import Item from './Item';
import {
  Input,
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownInputItem,
} from './styles';

type Props = {
  category?: ProductCategoryType;
  oldCategory?: ProductCategoryType;
  handleSelect: (category: ProductCategoryType) => void;
};

const ProductCategoryDropdown = ({
  oldCategory,
  category,
  handleSelect,
}: Props) => {
  const newCategoryRef = useRef<HTMLInputElement>(null);

  const productCategories = useGetProductCategories();
  const createProductCategory = useCreateProductCategory();

  const buttonValue = firstLetterToUppercase(
    category?.name || oldCategory?.name || 'Selecionar categoria'
  );

  const handleInput = () => {
    const categoryExists = productCategories?.find((category) => {
      return category.name === newCategoryRef.current?.value ? true : false;
    });

    if (newCategoryRef.current?.value && !categoryExists) {
      createProductCategory({
        name: firstLetterToUppercase(newCategoryRef.current.value),
        description: 'category',
      });

      newCategoryRef.current.value = '';
    }
  };

  return (
    <StyledDropdown>
      <StyledDropdownButton variant="primary" id="dropdown-basic">
        {buttonValue}
      </StyledDropdownButton>

      <Dropdown.Menu>
        <StyledDropdownInputItem>
          <Input
            ref={newCategoryRef}
            placeholder="Nova Categoria"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            onBlur={() => handleInput()}
          />
        </StyledDropdownInputItem>
        {productCategories?.map((category) => (
          <Item
            key={category.id}
            category={category}
            handleSelect={handleSelect}
          />
        ))}
      </Dropdown.Menu>
    </StyledDropdown>
  );
};

export default ProductCategoryDropdown;
