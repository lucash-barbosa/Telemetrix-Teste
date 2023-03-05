import xIcon from '@/assets/icons/x.svg';
import IconButton from '@/components/IconButton';
import { ProductCategoryType } from '@/global/types';
import useCreateProductCategory from '@/hooks/productCategory/useCreateProductCategory';
import useDeleteProductCategory from '@/hooks/productCategory/useDeleteProductCategory';
import useGetProductCategories from '@/hooks/productCategory/useGetProductCategories';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';
import { useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import {
  Input,
  ItemWrapper,
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownInputItem,
  StyledDropdownItem,
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
  const categories = useGetProductCategories();
  const deleteProductCategory = useDeleteProductCategory();

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
        name: newCategoryRef.current.value,
        description: 'category',
      });
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
        {categories?.map((category) => (
          <ItemWrapper key={category.id}>
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
          </ItemWrapper>
        ))}
      </Dropdown.Menu>
    </StyledDropdown>
  );
};

export default ProductCategoryDropdown;
