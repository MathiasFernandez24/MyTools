import './Home.css';
import Cards from '../cards/Cards'


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