import './Home.css';
import Cards from '../cards/Cards'
import { IconArrowBigLeftFilled } from '@tabler/icons-react';
import flechaIzquierda from './imagenes/flecha-izquierda.png'
import flechaDerecha from './imagenes/flecha-derecha.png'



function Home() {
    return (
        <div className="container-home">
            <div className='barra-navegacion'>
                Nuestras Herramientas
            </div>
            <div id='contenedor-carrusel'>
                <div className='item-carrusel' id='carrusel1'>
                    <div className='tarjeta-carrusel' id='tarjeta1'>
                            Lento, es la manera mas rápida de llegar a donde quieres estar.
                    </div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel3">
                            <img src={flechaIzquierda} alt="" />
                        </a>
                        <a href="#carrusel2">
                            <img src={flechaDerecha} alt="" />
                        </a>
                    </div>
                </div>
                <div className='item-carrusel' id='carrusel2'>
                    <div className='tarjeta-carrusel' id='tarjeta2'>
                        No renuncies, ni te rindas, todo lo grande toma tiempo.
                    </div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel1">
                            <img src={flechaIzquierda} alt="" />
                        </a>
                        <a href="#carrusel3">
                            <img src={flechaDerecha} alt="" />
                        </a>
                    </div>
                </div>
                <div className='item-carrusel' id='carrusel3'>
                    <div className='tarjeta-carrusel' id='tarjeta3'>
                        Los pasitos pequeños también te llevan a metas muy grandes.
                    </div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel2">
                            <img src={flechaIzquierda} alt="" />
                        </a>
                        <a href="#carrusel1">
                            <img src={flechaDerecha} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <Cards/>
        </div>
    )
}

export default Home;