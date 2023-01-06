import {Link} from "react-router-dom";
import './Navegation.css';

export default function Navegation() {
    return(
       <header>
            <nav className="navbar navbar-expand-sm w-100 bg-blue">
                <div className="container-fluid">
                    <h1>Rick & Morty</h1>
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item"> 
                            <Link className="nav-link" to="/">Home</Link>  
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/characters">Personajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
       </header>
    )
}

/*  className="d-flex bg-secondary gb-blue" */
