import { Item, HeaderWrapper, LinksWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <LinksWrapper>
            <Item to="/">Produtos</Item>
            <Item to="/editproducts">Editar Produtos</Item>
          </LinksWrapper>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
