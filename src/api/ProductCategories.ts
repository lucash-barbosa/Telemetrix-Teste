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
      const data = { name, description };

      await axios.post('/api/ProductCategory', data);
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
