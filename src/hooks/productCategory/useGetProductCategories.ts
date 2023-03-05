import { GetProductCategories } from '@/api/ProductCategories';

const useGetProductCategories = () => {
  const { data } = GetProductCategories();

  return data;
};

export default useGetProductCategories;
