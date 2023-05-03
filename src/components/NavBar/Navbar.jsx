import CardWidget from "../CardWidget.jsx/CardWidget"
import './NavBar.css'
const Navbar = () => {
  return (
    <header>
        <h1>Bicicletas</h1>

        <nav>
            <ul>
                <li>Gymano</li>
                <li>Nesdar</li>
                <li>Playera</li>
                <li>Montan</li>
            </ul>
        </nav>

        <CardWidget/>

    </header>
  )
}

export default Navbar