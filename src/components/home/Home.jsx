import './Home.css';
import Cards from '../cards/Cards'
// import Card from '../card/Card'


function Home() {
    return (
        <div className="container-home">
            <div className='barra-navegacion'>
                Nuestras Herramientas
            </div>
            <div id='contenedor-carrusel'>
                <div className='item-carrusel'>
                    <div className='tarjeta-carrusel' id='tarjeta1'>A</div>
                    <div className='flechas-carrusel'>
                        <i>I</i>
                        <i>D</i>
                    </div>
                </div>
                <div className='item-carrusel'>
                    <div className='tarjeta-carrusel' id='tarjeta2'>B</div>
                    <div className='flechas-carrusel'>
                        <i>I</i>
                        <i>D</i>
                    </div>
                </div>
                <div className='item-carrusel'>
                    <div className='tarjeta-carrusel' id='tarjeta3'>C</div>
                    <div className='flechas-carrusel'>
                        <i>I</i>
                        <i>D</i>
                    </div>
                </div>
            </div>
            <Cards/>
        </div>
    )
}

export default Home;