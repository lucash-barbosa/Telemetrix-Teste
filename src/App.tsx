import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { CategoryProvider } from './contexts/CategoryContext';
import { Container } from './global/globalStyles';
import EditProducts from './pages/EditProducts';
import Products from './pages/Products';

const App = () => {
  return (
    <CategoryProvider>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/EditProducts" element={<EditProducts />} />
            <Route path="/" element={<Products />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </CategoryProvider>
  );
};

export default App;
