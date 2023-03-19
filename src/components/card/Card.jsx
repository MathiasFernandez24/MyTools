import React from 'react'
import './Card.css'
import { DB } from '../../dataBase/DB'

const Card = () => {

    const i = DB[0]
    return (
        <div className='card-container'>
            <div>{i.name}</div>
            <img src={i.image} alt="" />
        </div>
    )
}

export default Card