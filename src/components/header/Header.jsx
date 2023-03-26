import React from 'react'
// import Footer from '../footer/Footer'
import './Header.css'
import { IconBrandLinkedin } from '@tabler/icons-react';

const header = () => {
    return (
        <div className='barra-navegacion animate__animated animate__bounceInDown'>
            <a href='https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/' target={'_blank'} className='linkedin-click'>
                Maira
                <IconBrandLinkedin />
            </a>
            <h3>
                Nuestras Herramientas
            </h3>
            <a href='https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/' target={'_blank'} className='linkedin-click'>
                <IconBrandLinkedin />
                Mathi
            </a>


        </div>
    )
}

export default header