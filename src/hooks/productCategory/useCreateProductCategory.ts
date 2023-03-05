import { CreateProductCategory } from '@/api/ProductCategories';
import { NewProductCategoryType } from '@/global/types';

const useCreateProductCategory = () => {
  const { mutate } = CreateProductCategory();

  const createProductCategory = ({
    name,
    description,
  }: NewProductCategoryType) => {
    try {
      mutate({ name, description });
    } catch (error) {
      console.error(error);
    }
  };

  return createProductCategory;
};

export default useCreateProductCategory;
