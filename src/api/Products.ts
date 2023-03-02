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

// Put Product

type ProductData = {
  name: string;
  description: string;
};

type EditProductProps = {
  id: number;
  data: ProductData;
};

export const EditProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, data }: EditProductProps) => {
      const response = await axios.put(`/api/Product/${id}`, data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getProducts');
      },
    }
  );
};

// Post Product

type AddProductProps = {
  data: ProductData;
};

export const AddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ data }: AddProductProps) => {
      const response = await axios.post('/api/Product', data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getProducts');
      },
    }
  );
};
