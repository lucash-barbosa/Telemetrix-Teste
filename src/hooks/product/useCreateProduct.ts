import { CreateProduct } from '@/api/Products';
import { NewProductType } from '@/global/types';

const useCreateProduct = () => {
  const { mutate } = CreateProduct();

  const createProduct = ({ name, description, categoryId }: NewProductType) => {
    try {
      mutate({ name, description, categoryId });
    } catch (error) {
      console.error(error);
    }
  };

  return createProduct;
};

export default useCreateProduct;
