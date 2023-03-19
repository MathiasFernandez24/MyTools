import './Cards.css';
import Card from '../card/Card'
import { DB } from '../../dataBase/DB'


function Cards() {

    const i = DB[0]

    return (
        <div className='cards-container'>
            {/* <div className='card-container'> */}
                <Card image={i.image} name={i.name} />
            {/* </div> */}
            {/* <div className='card-container'> */}
                <Card image={i.image} name={i.name} />
            {/* </div> */}
            {/* <div className='card-container'> */}
                <Card image={i.image} name={i.name} />
            {/* </div> */}
            
        </div>
    )

}

export default Cards;