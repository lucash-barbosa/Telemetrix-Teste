import { Route, Routes } from 'react-router-dom';
import { Container } from './global/globalStyles';

// import Product from './pages/Product';
import Products from './pages/Products';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/products/:id" element={<Product />} /> */}
      </Routes>
    </Container>
  );
};

export default App;
