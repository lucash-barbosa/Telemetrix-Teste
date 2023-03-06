import Carousel from '@/components/Carousel';
import { CategoryContext } from '@/contexts/CategoryContext';
import { Title, Wrapper } from '@/global/globalStyles';
import useGetProducts from '@/hooks/product/useGetProducts';
import useGetProductCategories from '@/hooks/productCategory/useGetProductCategories';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';
import { useContext, useState } from 'react';

import CardProduct from './CardProduct';
import {
  ArrowDown,
  FilterButton,
  FilterInput,
  FiltersWrapper,
  ProductsWrapper,
} from './styles';

const Products = () => {
  const {
    data: products,
    isFetching: productsFetching,
    isError: productsError,
  } = useGetProducts();
  const [filterValue, setFilterValue] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { selectedCategory } = useContext(CategoryContext);

  const filteredProducts = products
    ?.filter(
      (product) =>
        selectedCategory === null || product.categoryId === selectedCategory
    )
    .filter((product) =>
      product.name.toLowerCase().includes(filterValue.toLowerCase())
    )
    .sort((a, b) => {
      const compareValue = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const getProductCategories = useGetProductCategories();

  return (
    <Wrapper>
      <Title>Produtos</Title>

      <FiltersWrapper>
        <FilterInput
          id="productFilter"
          type="text"
          placeholder="Pesquisar"
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
        />

        <FilterButton onClick={handleSortOrderChange}>
          Ordenar <ArrowDown rotateArrow={sortOrder} />
        </FilterButton>
      </FiltersWrapper>

      {productsFetching && <p>Carregando...</p>}
      {productsError && <p>Ocorreu um erro ao carregar os dados</p>}

      {getProductCategories && <Carousel items={getProductCategories} />}

      <ul>
        {filteredProducts?.map((product) => {
          const productName = firstLetterToUppercase(product.name);
          const productDescription = firstLetterToUppercase(
            product.description
          );

          return (
            <ProductsWrapper key={product.id}>
              <CardProduct
                productCategoryId={product.categoryId}
                text={productDescription}
                title={productName}
              />
            </ProductsWrapper>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Products;
