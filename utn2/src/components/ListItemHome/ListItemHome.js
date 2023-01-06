import {Link} from "react-router-dom";

export default function ListItemHome ({dato,infoPath}){
    return(
            <Link to={infoPath}>
                <button className="boton-home">{dato}</button>
            </Link>
    )
} 
