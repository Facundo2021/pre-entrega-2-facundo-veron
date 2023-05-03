import './CartWidget.css'

const CardWidget = () => {
  const imgCarrito = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png";
    return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito"/>
        <strong> 6 </strong>
    </div>
  )
}

export default CardWidget