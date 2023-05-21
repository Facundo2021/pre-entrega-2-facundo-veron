import CardWidget from "../CardWidget.jsx/CardWidget"
import './NavBar.css'
import { NavLink,Link } from "react-router-dom"
const Navbar = () => {
  return (
    <header>
        
        <Link to="/"><h1>Bicicletas</h1></Link>

        <nav>
            <ul>
                <li><NavLink to={`/Categoria 2/`}>Gymano</NavLink></li>
                <li><NavLink to={`/Categoria 2/`}>Nesdar</NavLink></li>
                <li><NavLink to={`/Categoria 3/`}>Playera</NavLink></li>
                <li><NavLink to={`/Categoria 3/`}>Montan</NavLink></li>
            </ul>
        </nav>

        <CardWidget/>

    </header>
  )
}

export default Navbar