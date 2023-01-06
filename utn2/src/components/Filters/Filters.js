export default function Filters({nombreFiltro,datoFiltro,muestraValor}) {

    return(
        <div className="form-check form-switch bg-filtros px-5 py-1">
            <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
            <label className="form-check-label" htmlFor={nombreFiltro}>{nombreFiltro}</label>
        </div>
    )
}

/*  cambiamos class por className
    y for por htmlFor
    para que diferencie entre el bucle y el atributo
    o el nombre de una clase con clases POO
*/
