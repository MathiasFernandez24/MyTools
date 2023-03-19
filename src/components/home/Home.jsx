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
                <div className='item-carrusel' id='carrusel1'>
                    <div className='tarjeta-carrusel' id='tarjeta1'>A</div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel3">
                            <i>I</i>
                        </a>
                        <a href="#carrusel2">
                            <i>D</i>
                        </a>
                    </div>
                </div>
                <div className='item-carrusel' id='carrusel2'>
                    <div className='tarjeta-carrusel' id='tarjeta2'>B</div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel1">
                            <i>I</i>
                        </a>
                        <a href="#carrusel3">
                            <i>D</i>
                        </a>
                    </div>
                </div>
                <div className='item-carrusel' id='carrusel3'>
                    <div className='tarjeta-carrusel' id='tarjeta3'>C</div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel2">
                            <i>I</i>
                        </a>
                        <a href="#carrusel1">
                            <i>D</i>
                        </a>
                    </div>
                </div>
            </div>
            <Cards/>
        </div>
    )
}

export default Home;