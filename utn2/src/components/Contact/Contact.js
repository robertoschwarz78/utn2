import "./Contact.css";
import { Fragment } from 'react';
import Navegation from '../Navegation/Navegation.js'

export default function Contact(){
    return(
        <Fragment>
            <Navegation/>
            <main className="main-contact-div">
                <h2>Contact</h2>
                <h3>Leave us your information so we can contact you</h3>
                <form className="row g-3 mx-4" action=''>
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" />

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="correo" className="form-label">Email</label>
                        <input type="email" className="form-control" id="correo" />
                    </div>  
                    <div className="col-12">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea id="mensaje" className="form-control"></textarea>
                    </div>
                    
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
           </main>
        </Fragment>
        
    )
} 

    /* Formulario no controlado*/
