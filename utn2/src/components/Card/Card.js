import './Card.css'
import {useState} from 'react';

export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);

    const mostrarInfo =()=>{
        console.log(info) // muestra el contenido en la consola
        setOcultar(false)
    }

    const ocularInfo=()=>{
        setOcultar(true)
    }

    // muestra foto, nombre, boton y/o detalles
    // bg-primary my-5 d-flex justify-content-between
    // d-flex justify-content-between flex-wrap

    return(
        <div className="card flex-row">
            <div className="card1 d-flex flex-column justify-content-between align-items-center">
                <img src={info.image} alt={info.name}/>
                <h2>{info.name}</h2>
                <button onClick={mostrarInfo} className={ ocultar === true ? "btn align-self-end" : "d-none"}>
                    Más info...
                </button>  
            </div>
            {ocultar == false?
                <div className="card2 p-5 flex-column align-items-center">
                    <button className="btn align-self-end" onClick={ocularInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="fw-bold">Character Status</div>
                            <div className="ms-2 me-auto">{info.status}</div>
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Species</div>
                            <div className="ms-2 me-auto">{info.species}</div>
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Origin</div>
                            <div className="ms-2 me-auto">{info.origin.name}</div>
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Gender</div>
                            <div className="ms-2 me-auto">{info.gender}</div>
                        </li>
                    </ul>
                </div>:''
            }
        </div>
    )
}