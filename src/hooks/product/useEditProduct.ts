import { EditProduct } from '@/api/Products';

type Props = {
  id: number;
  name?: string;
  description?: string;
  categoryId?: number;
  oldName?: string;
  oldDescription?: string;
  oldCategoryId?: number;
};

const useEditProduct = () => {
  const { mutate } = EditProduct();

  const editProduct = async ({
    id,
    oldName = '',
    oldDescription = '',
    oldCategoryId = 0,
    name = oldName,
    description = oldDescription,
    categoryId = oldCategoryId,
  }: Props) => {
    try {
      await mutate({ id, name, description, categoryId });
    } catch (error) {
      console.error(error);
    }
  };

  return editProduct;
};

export default useEditProduct;
