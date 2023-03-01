import { getProductCategories } from '../../api/ProductCategories';
import { getProducts } from '../../api/Products';
import ProductCard from '../../components/ProductCard';
import { Title, Wrapper } from '../../global/globalStyles';

const Products = () => {
  const { productsData, productsFetching, productsError } = getProducts();
  const { productCategoriesData } = getProductCategories();

  const findProductCategory = (productCategoryId: number) => {
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
          const productCategory = findProductCategory(product.categoryId);

          const productName =
            product.name[0].toUpperCase() + product.name.substring(1);

          const productDescription =
            product.description[0].toUpperCase() +
            product.description.substring(1);

          return (
            <li key={product.id}>
              <ProductCard
                id={product.id}
                name={productName}
                description={productDescription}
                productCategory={productCategory?.name}
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Products;
