import "./Home.css";
import Navegation from '../Navegation/Navegation.js'
import ListItemHome from "../ListItemHome/ListItemHome.js";

export default function Home() {

    return(
        <header className="home-arriba container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="home-recuadro d-flex flex-column justify-content-center">
                <h1 className="h1-home row justify-content-center">
                    Proyecto - Rick & Morty
                </h1>
                <div className="home-fila-botones align-items-center">
                        <ListItemHome dato="Personajes" infoPath="/characters"/>
                        <ListItemHome dato="Contacto" infoPath="/contact"/>
                </div>
            </div>
        </header>
 
    )
}
