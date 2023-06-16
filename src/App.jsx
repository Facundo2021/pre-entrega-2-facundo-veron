import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
            <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
            <Route path='*' element={<h2> Sitio en Construcción </h2>} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/checkout' element={ <Checkout/>} />
          </Routes>
        </CarritoProvider>      
      </BrowserRouter>
    </>
  );
}

export default App;