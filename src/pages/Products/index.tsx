import Carousel from '@/components/Carousel';
import { Title, Wrapper } from '@/global/globalStyles';
import useGetProducts from '@/hooks/product/useGetProducts';
import useGetProductCategories from '@/hooks/productCategory/useGetProductCategories';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';

import CardProduct from './CardProduct';
import { ProductsWrapper } from './styles';

const Products = () => {
  const {
    data: products,
    isFetching: productsFetching,
    isError: productsError,
  } = useGetProducts();

  const getProductCategories = useGetProductCategories();

  const categories = getProductCategories?.map((category) => category.name);

  return (
    <Wrapper>
      <Title>Produtos</Title>

      {productsFetching && <p>Carregando...</p>}
      {productsError && <p>Ocorreu um erro ao carregar os dados</p>}

      {categories && <Carousel items={categories} />}

      <ul>
        {products?.map((product) => {
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
