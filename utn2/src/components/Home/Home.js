import "./Home.css";
import Navegation from '../Navegation/Navegation.js'
import ListItemHome from "../ListItemHome/ListItemHome.js";

export default function Home() {

    return(
        <header className="bg-primary">
        <h1 >Proyect - Rick & Morty</h1>
        <nav className="navbar">
            <ul className="d-flex justify-content-between">
                Lista de links:
                <ListItemHome dato="Characters" infoPath="/characters"/>
                <ListItemHome dato="Contact" infoPath="/contact"/>
            </ul>
        </nav>
        </header>
 
    )
}
