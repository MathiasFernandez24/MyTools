import './Cards.css';
import Card from '../card/Card'
import { DB } from '../../dataBase/DB'


function Cards() {

    const i = DB[0]

    return (
        <div className='cards-container'>
            <span>
                <Card image={i.image} name={i.name} />
            </span>
            <span>
                <Card image={i.image} name={i.name} />
            </span>
            <div>
                <Card image={i.image} name={i.name} />
            </div>
            <Card image={i.image} name={i.name} />
            <Card image={i.image} name={i.name} />
        </div>
    )

}

export default Cards;