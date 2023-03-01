import axios from 'axios';
import { useQuery } from 'react-query';
import { ProductCategoryType, ProductType } from '../global/types';

axios.defaults.baseURL = 'http://200.169.68.106:9998';

// Products

export const getProducts = () => {
  const { data, isFetching, isError } = useQuery<ProductType[]>(
    'products',
    async () => {
      const response = await axios.get('/api/Product');

      return response.data;
    }
  );

  return { 
    productsData: data, 
    productsFetching: isFetching, 
    productsError: isError 
  };
};


// ProductCategory by id

export const getProductCategories = () => {
  const { data } = useQuery<ProductCategoryType[]>('productCategory',
    async () => {
      const response = await axios.get('/api/ProductCategory');

      return response.data;
    });

  return {
    productCategoriesData: data
  };
};