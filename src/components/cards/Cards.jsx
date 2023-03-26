import './Cards.css';
import Card from '../card/Card'
import { DB } from '../../dataBase/DB'
import 'animate.css';

function Cards() {

    return (
        <div className='cards-container animate__animated animate__fadeInUp'>
            {
                DB.map((card) => <Card card={card} />)
            }
        </div>
    )

}

export default Cards;