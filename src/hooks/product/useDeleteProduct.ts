import { DeleteProduct } from '@/api/Products';

const useDeleteProduct = () => {
  const { mutate } = DeleteProduct();

  const deleteProduct = async (id: number) => {
    try {
      await mutate(id);
    } catch (error) {
      console.error(error);
    }
  };

  return deleteProduct;
};

export default useDeleteProduct;
