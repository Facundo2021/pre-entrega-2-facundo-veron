import {useState, useEffect} from 'react'

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect( ()=> {
        document.title = `Categoria: ${categoria}`;
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria)
    } 


  return (
    <div>
        <h2>Categoría de Productos: </h2>
        <button onClick={()=> handleClick("Gymano")}> Gymano </button>
        <button onClick={()=> handleClick("Nesdar")}> Nesdar </button>
        <button onClick={()=> handleClick("Playera")}> Playera </button>
        <button onClick={()=> handleClick("Montan")}> Montan </button>    </div>
  )
}

export default Categorias