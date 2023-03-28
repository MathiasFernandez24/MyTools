import './Home.css';
import Cards from '../cards/Cards'
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import Carrusel from '../carrusel/Carrusel';
import Carrusel2 from '../carrusel/Carrusel2';
import 'animate.css';



function Home() {
    return (
        <div className="container-home animate__animated animate__fadeIn">
            <Header />
            {/* <Carrusel /> */}
            <Carrusel2 />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;