import { Title, Wrapper } from '@/global/globalStyles';
import useDeleteProduct from '@/hooks/product/useDeleteProduct';
import useGetProducts from '@/hooks/product/useGetProducts';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';
import { useState } from 'react';

import CardCreateProduct from './CardCreateProduct';
import CardProduct from './CardProduct';
import { CreateProduct, ArrowDown } from './styles';

const Products = () => {
  const [showCardCreateProduct, setShowCardCreateProduct] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    data: products,
    isFetching: productsFetching,
    isError: productsError,
  } = useGetProducts();
  const deleteProduct = useDeleteProduct();

  if (productsFetching) {
    return <p>Carregando...</p>;
  }

  if (productsError) {
    return <p>Ocorreu um erro ao carregar os dados</p>;
  }

  return (
    <Wrapper>
      <Title>Produtos</Title>

      <CreateProduct
        onClick={() => setShowCardCreateProduct(!showCardCreateProduct)}
      >
        Adicionar novo produto <ArrowDown rotateArrow={showCardCreateProduct} />
      </CreateProduct>

      {showCardCreateProduct && (
        <CardCreateProduct
          hideCardCreateProduct={() => setShowCardCreateProduct(false)}
        />
      )}

      <ul>
        {products?.map((product) => {
          const productName = firstLetterToUppercase(product.name);
          const productDescription = firstLetterToUppercase(
            product.description
          );

          return (
            <li key={product.id}>
              <CardProduct
                productId={product.id}
                productCategoryId={product.categoryId}
                handleEdit={() => setEditMode(!editMode)}
                handleDelete={() => deleteProduct(product.id)}
                text={productDescription}
                title={productName}
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Products;
