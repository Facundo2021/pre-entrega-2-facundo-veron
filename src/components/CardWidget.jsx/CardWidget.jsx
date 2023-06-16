import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
const CardWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png";
    return (
    <div>
        <Link to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <span> {cantidadTotal} </span>
        }
      </Link>
    </div>
  )
}

export default CardWidget