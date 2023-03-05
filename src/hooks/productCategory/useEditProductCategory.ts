import { EditProductCategory } from '@/api/ProductCategories';
import { ProductCategoryType } from '@/global/types';

const useEditProductCategory = () => {
  const { mutate } = EditProductCategory();

  const editProductCategory = ({
    id,
    name,
    description,
  }: ProductCategoryType) => {
    try {
      mutate({ id, name, description });
    } catch (error) {
      console.error(error);
    }
  };

  return editProductCategory;
};

export default useEditProductCategory;
