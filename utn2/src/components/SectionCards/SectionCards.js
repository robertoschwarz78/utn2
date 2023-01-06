import './SectionCards.css'
import Card from "../Card/Card";

export default function SectionCards({datos}) {
    return(
        <section className="section-cards">
            {datos.map((dato)=>{ 
                return <Card key={dato.id} info={dato}/>
            })} 
        </section>
    )
}
