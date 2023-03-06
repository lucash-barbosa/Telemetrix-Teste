import { Title, Wrapper } from '@/global/globalStyles';
import useDeleteProduct from '@/hooks/product/useDeleteProduct';
import useGetProducts from '@/hooks/product/useGetProducts';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';
import { useState } from 'react';

import CardCreateProduct from './CardCreateProduct';
import CardProduct from './CardProduct';
import {
  CreateProduct,
  ArrowDown,
  FiltersWrapper,
  FilterInput,
} from './styles';

const EditProducts = () => {
  const [showCardCreateProduct, setShowCardCreateProduct] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    data: products,
    isFetching: productsFetching,
    isError: productsError,
  } = useGetProducts();
  const [filterValue, setFilterValue] = useState('');

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const deleteProduct = useDeleteProduct();

  return (
    <Wrapper>
      <Title>Produtos</Title>

      {productsFetching && <p>Carregando...</p>}
      {productsError && <p>Ocorreu um erro ao carregar os dados</p>}

      <FiltersWrapper>
        <FilterInput
          id="productFilter"
          type="text"
          placeholder="Pesquisar"
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
        />
      </FiltersWrapper>

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
        {filteredProducts?.map((product) => {
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

export default EditProducts;
