import "./Contact.css";
import { Fragment } from 'react';
import Navegation from '../Navegation/Navegation.js'

export default function Contact(){
    return(
        <Fragment>
        <Navegation/>
        <main className="main-contact"> 
            <div className="main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2>Formulario de Contacto</h2>
                <h3>A continuación puede dejarnos sus comentarios</h3>
                <form className="row g-3 p-4" action='' id="contactForm">
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="correo" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="correo" />
                    </div>  
                    <div className="col-md-12">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea name="comment" id="mensaje" className="form-control" form="contactForm"></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn boton-form colorW">Enviar</button>
                    </div>
                </form>
           </div>
        </main>
        </Fragment>
        
    )
} 

    /* Formulario no controlado*/
