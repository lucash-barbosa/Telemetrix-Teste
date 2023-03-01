import { Route, Routes } from 'react-router-dom';

import { Container } from './global/globalStyles';
import Products from './pages/Products';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </Container>
  );
};

export default App;
