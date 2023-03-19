import './Home.css';
import Cards from '../cards/Cards'
// import Card from '../card/Card'


function Home() {
    return (
        <div className="container-home">
            <div className='barra-navegacion'>
                Nuestras Herramientas
            </div>
            <Cards/>
        </div>
    )
}

export default Home;