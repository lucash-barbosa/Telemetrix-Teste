import { NewProductType, ProductType } from '@/global/types';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

axios.defaults.baseURL = 'http://200.169.68.106:9998';

// Get products
export const GetProducts = () => {
  return useQuery<ProductType[]>('products', async () => {
    const response = await axios.get('/api/Product');

    return response.data;
  });
};

// Post product
export const CreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ name, description, categoryId }: NewProductType) => {
      await axios.post('/api/Product', { name, description, categoryId });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products');
      },
      onError: () => {
        alert('Ocorreu um erro ao adicionar produto');
      },
    }
  );
};

// Put product
export const EditProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, name, description, categoryId }: ProductType) => {
      await axios.put(`/api/Product/${id}`, { name, description, categoryId });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products');
      },
      onError: () => {
        alert('Ocorreu um erro ao editar produto');
      },
    }
  );
};

// Delete product
export const DeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => axios.delete(`/api/Product/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
    onError: () => {
      alert('Ocorreu um erro ao deletar produto');
    },
  });
};
