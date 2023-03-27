import React from 'react'
import './Carrusel.css'
import flechaIzquierda from './flecha-izquierda.png'
import flechaDerecha from './flecha-derecha.png'
import 'animate.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const Carrusel = () => {
    return (
        <div class="animate__animated animate__fadeInRight">
            <div id='contenedor-carrusel'>
                <div className='item-carrusel' id='carrusel1'>
                    <div className='tarjeta-carrusel' id='tarjeta1'>
                        <h5 >Lento, es la manera mas rápida de llegar a donde quieres estar.</h5>
                    </div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel3">
                            <IconChevronLeft />
                        </a>
                        <a href="#carrusel2">
                            <IconChevronRight />
                        </a>
                    </div>
                </div>
                <div className='item-carrusel' id='carrusel2'>
                    <div className='tarjeta-carrusel' id='tarjeta2'>
                        <h5>No renuncies, ni te rindas, todo lo grande toma tiempo</h5>
                    </div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel1">
                            <IconChevronLeft />
                        </a>
                        <a href="#carrusel3">
                            <IconChevronRight />
                        </a>
                    </div>
                </div>
                <div className='item-carrusel' id='carrusel3'>
                    <div className='tarjeta-carrusel' id='tarjeta3'>
                        <h5> Los pasitos pequeños también te llevan a metas muy grandes.</h5>
                    </div>
                    <div className='flechas-carrusel'>
                        <a href="#carrusel2">
                            <IconChevronLeft />
                        </a>
                        <a href="#carrusel1">
                            <IconChevronRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carrusel