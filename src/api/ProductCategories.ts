import axios from 'axios';
import { useQuery } from 'react-query';

import { ProductCategoryType } from '../global/types';

export const getProductCategories = () => {
  const { data } = useQuery<ProductCategoryType[]>(
    'getProductCategory',
    async () => {
      const response = await axios.get('/api/ProductCategory');

      return response.data;
    }
  );

  return {
    productCategoriesData: data,
  };
};
