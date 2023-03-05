import { DeleteProductCategory } from '@/api/ProductCategories';

const useDeleteProductCategory = () => {
  const { mutate } = DeleteProductCategory();

  const deleteProductCategory = async (id: number) => {
    try {
      await mutate(id);
    } catch (error) {
      console.error(error);
    }
  };

  return deleteProductCategory;
};

export default useDeleteProductCategory;
