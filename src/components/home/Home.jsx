import './Home.css';
import Cards from '../cards/Cards'
import Header from '../header/Header.jsx';
import Carrusel from '../carrusel/Carrusel';



function Home() {
    return (
        <div className="container-home">
            <Header />
            <Carrusel />
            <Cards />
        </div>
    )
}

export default Home;