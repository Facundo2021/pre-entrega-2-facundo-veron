import './App.css';
import Navbar from './components/NavBar/Navbar';
import Contador from './components/Contador/Contador';
import Categorias from './components/Categorias/Categorias';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Categorias/>
        <ItemListContainer greeting="Productos" />
        <ItemDetailContainer/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
            <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;