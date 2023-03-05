import { NewProductCategoryType, ProductCategoryType } from '@/global/types';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

// Get product category
export const GetProductCategories = () => {
  return useQuery<ProductCategoryType[]>('productCategory', async () => {
    const response = await axios.get('/api/ProductCategory');

    return response.data;
  });
};

// Post product category
export const CreateProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ name, description }: NewProductCategoryType) => {
      await axios.post('/api/ProductCategory', { name, description });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('productCategory');
      },
      onError: () => {
        alert('Ocorreu um erro ao criar categoria');
      },
    }
  );
};

// Put product category
export const EditProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ id, name, description }: ProductCategoryType) => {
      await axios.put(`/api/ProductCategory/${id}`, { name, description });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('productCategory');
      },
      onError: () => {
        alert('Ocorreu um erro ao editar categoria');
      },
    }
  );
};

// Delete product category
export const DeleteProductCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: number) => axios.delete(`/api/ProductCategory/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('productCategory');
      },
      onError: () => {
        alert('Ocorreu um erro ao deletar categoria');
      },
    }
  );
};
