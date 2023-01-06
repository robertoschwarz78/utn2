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
    return(
        <div className="card bg-primary my-5 d-flex justify-content-between">
            <div>
                <img src={info.image} alt={info.name}/>
                <h2 >{info.name}</h2>
                <button onClick={mostrarInfo} className={ ocultar === true ? "btn" : "d-none"}>
                    Más info...
                </button>  
            </div>
            {ocultar == false?
                <div>
                    <button className="btn" onClick={ocularInfo}>X</button>
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