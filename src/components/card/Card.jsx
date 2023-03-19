import React from 'react'
import './Card.css'
import { DB } from '../../dataBase/DB'

const Card = ({image, name}) => {

    const i = DB[0]
    const i2 = DB[1]
    return (
        <div href={i.url} className='card-container'>
            <a href={i.url} target='_blank'>
                <div className='front card-container'>
                    {i.name}
                    <img className='card-image' src={i.image} alt="Loading.." />
                </div>
                <div className='back'>
                    {i2.name}
                    <img className='card-image' src={i2.image} alt="Loading.." />
                </div>

            </a>
        </div>
    )
}

export default Card