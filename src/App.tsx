import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { Container } from './global/globalStyles';
import EditProducts from './pages/EditProducts';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/EditProducts" element={<EditProducts />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
