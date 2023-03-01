import { Link } from 'react-router-dom';
import { getProductCategories, getProducts } from '../../api';
import ProductCard from '../../components/ProductCard';
import { Title, Wrapper } from '../../global/globalStyles';

const Products = () => {
  const { productsData, productsFetching, productsError } = getProducts();
  const { productCategoriesData } = getProductCategories();

  const FindProductCategory = (productCategoryId: number) => {
    const productCategory = productCategoriesData?.find((category) => {
      return category.id === productCategoryId;
    });

    return productCategory;
  };

  return (
    <Wrapper>
      <Title>Produtos</Title>

      {productsFetching && <p>Carregando...</p>}
      {productsError && <p>Ocorreu um erro ao carregar os dados</p>}

      <ul>
        {productsData?.map((product) => {
          const productName =
            product.name[0].toUpperCase() + product.name.substring(1);
          const productDescription =
            product.description[0].toUpperCase() +
            product.description.substring(1);

          const productCategory = FindProductCategory(product.categoryId);

          return (
            <Link to={`products/${product.id}`} key={product.id}>
              <ProductCard
                name={productName}
                description={productDescription}
                productCategory={productCategory?.name}
              />
            </Link>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Products;
