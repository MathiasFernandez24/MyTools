import React from 'react'
import './Card.css'
import { DB } from '../../dataBase/DB'

const Card = ({ card }) => {

    const i = DB[0]
    return (
        <div href={card.url} className='card-container'>
            <a href={card.url} target='_blank'>
                <div className='front'>
                    {card.name}
                    <img className='card-image' src={card.image} alt="Loading.." />
                </div>
                <div className='back'>
                    {card.detail}
                    {/* <img className='card-image' src={i2.image} alt="Loading.." /> */}
                </div>

            </a>
        </div>
    )
}

export default Card