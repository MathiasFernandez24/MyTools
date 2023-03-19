import React from 'react'
import './Card.css'
import 'animate.css';

const Card = ({ card }) => {

    return (
        <div href={card.url} className='card-container animate__animated animate__fadeIn animate__slower'>
            <a href={card.url} target='_blank'>
                <div className='front'>
                    <img className='card-image' src={card.image} alt="Loading.." />
                </div>
                <div className='back'>
                    <p className='title'>
                        {card.name}
                    </p>
                    <p className='detail'>
                        {card.detail}
                    </p>

                    {/* <img className='card-image' src={i2.image} alt="Loading.." /> */}
                </div>
            </a>
        </div>
    )
}

export default Card