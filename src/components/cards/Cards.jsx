import './Cards.css';
import Card from '../card/Card'
import { DB } from '../../dataBase/DB'


function Cards() {

    return (
        <div className='cards-container'>
            
            {
                DB.map((card) => <Card card={card} />)
            }

        </div>
    )

}

export default Cards;