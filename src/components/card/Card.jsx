import React from 'react'
import './Card.css'
// import { DB } from '../../dataBase/DB'

const Card = ({image, name}) => {

    // const i = DB[0]
    return (
        <div className='card-container'>
            <div>{name}</div>
            <img src={image} alt="" />
        </div>
    )
}

export default Card