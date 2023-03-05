import useGetProductCategories from './useGetProductCategories';

const useFindProductCategory = (productCategoryId: number) => {
  const getProductCategories = useGetProductCategories();

  const category = getProductCategories?.find((category) => {
    return category.id === productCategoryId;
  });

  return category;
};

export default useFindProductCategory;
