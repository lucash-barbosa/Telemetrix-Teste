import { GetProducts } from '@/api/Products';

const useGetProducts = () => {
  const { data, isFetching, isError } = GetProducts();

  return { data, isFetching, isError };
};

export default useGetProducts;
