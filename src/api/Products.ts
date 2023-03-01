import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { ProductType } from '../global/types';

axios.defaults.baseURL = 'http://200.169.68.106:9998';

// Get Products
export const getProducts = () => {
  const { data, isFetching, isError } = useQuery<ProductType[]>(
    'getProducts',
    async () => {
      const response = await axios.get('/api/Product');

      return response.data;
    }
  );

  return {
    productsData: data,
    productsFetching: isFetching,
    productsError: isError,
  };
};

// Delete Product
export const DeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => axios.delete(`/api/Product/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('getProducts');
    },
  });
};