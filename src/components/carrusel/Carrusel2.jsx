import React, { useEffect, useState } from 'react'
import './Carrusel.css'
import { IconChevronLeft, IconChevronRight, IconSparkles } from '@tabler/icons-react';
import 'animate.css';


const Carrusel2 = () => {
    const [frase, setFrase] = useState("")
    const [animationClass, setAnimationClass] = useState("");
    const arrayFrases = [
        "Lento, es la manera mas rápida de llegar a donde quieres estar",
        "Los pasitos pequeños también te llevan a metas muy grandes",
        "Si estas convencido que funcionará, verás oportunidades y no obstaculos ",
        "Ya estás mas cerca de la meta de llegada que de la meta de salida",
        "No soñamos con el exito, trabajamos en ello",
        "Siempre la dedicacion y esfuerzo llegó mas lejos que el talento",
        "Solos podemos hacer poco, juntos podemos hacer mucho mas",
        "Aunque no lo sepas, probablemente seas el arcoiris en la nube de alguien",
        "Dentro de unos años recordaras esto y te lo agradeceras",
        "Tu yo del futuro está seguro que vas por el camino indicado, aunque no lo puedas ver",
        "No renuncies, ni te rindas, todo lo grande toma tiempo",
        "Nunca es demasiado tarde para ser lo que podrías haber sido",
        "Tienes el poder de crear la vida de tus sueños",
        "La cuestión no es quién va a permitírmelo, sino quién va a ser capaz de pararme",
        "Los dos guerreros más poderosos son la paciencia y el tiempo",
        "Das lo que eres, no lo que recibes",
        "Caerse está permitido, levantarse es obligatorio",
        "Un objetivo sin un plan es solo un deseo",
        "Da siempre lo mejor que tienes. Lo que plantes ahora, lo cosecharás más tarde",
        "Si no puedes tolerar a los críticos, no haga nada nuevo o interesante",
        "Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado",
        "Va a pasar, porque tú vas a hacer que pase",
        "Da el primer paso con fe. No tienes que ver todas las escaleras, solo da el primer paso",
        "Solo imagina lo precioso que puede ser arriesgarse y que todo salga bien",
        "Alguien se sienta en una sombra hoy porque alguien plantó un árbol hace mucho tiempo",
        "Nunca eres demasiado viejo para marcarte otra meta o tener un nuevo sueño",
        "Quiero que todo te salga bien, que rías en voz alta, que cada meta se cumpla, quiero verte ganando en la vida",
        "Siempre pudiste ¿Por qué sería diferente ahora?",
        "No solo es cumplir tu parte, sino colaborar en equipo para crecer exponencialmente",
        "No te sorprendas cuando la vida te empiece a mejorar ¡TE LO MERECES!",
        "Después del miedo ¡HAY MAGIA!",
        "Un día nos irá tan bien, que hasta lo que hoy nos falta, nos va a sobrar",
        "Tu mente cree lo que le dices ¡Háblale bonito!",
        "Algún día recordarás todo el proceso que hiciste y te alegrarás de no haberte dado por vencido",
    ]



    useEffect(() => {
        const interval = setInterval(() => {
            const randomNumber = Math.floor(Math.random() * arrayFrases.length)
            setFrase(arrayFrases[randomNumber])

            setTimeout(() => {
                setAnimationClass("animate__animated animate__fadeOutDown animate__slow"); // Agrego la clase para desencadenar la animación
            }, 10200); // Espera 10.2s antes de agregar la clase, en realidad lo que busco es ejecutarla 1.8 segundos antes que cambie
            setTimeout(() => {
                setAnimationClass("animate__animated animate__fadeInDown animate__slow"); // Agrego la clase para desencadenar la animación
            }, 0)
        }, frase === "" ? 0 : 12000);//la primera vez lo ejecuto instantaneamente
        return () => clearInterval(interval)
    }, [frase])

    return (
        <div className='carrusel-2-container animate__animated animate__fadeInRight'>
            <h5 className={animationClass} key={frase} >
                <IconSparkles />
                {frase}
                <IconSparkles />
            </h5>
        </div>
    )




    // const [count, setCount] = useState(0);
    // const [animationClass, setAnimationClass] = useState("animate");

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount((prevCount) => prevCount + 1);
    //         setAnimationClass(""); // Elimina la clase para desencadenar la animación
    //         setTimeout(() => {
    //             setAnimationClass("animate__animated animate__fadeOutDown animate__slow"); // Agrega la clase para desencadenar la animación
    //         }, 8200); // Espera 100ms antes de agregar la clase
    //         setTimeout(() => {
    //             setAnimationClass("animate__animated animate__fadeInDown animate__slow"); // Agrega la clase para desencadenar la animación
    //         }, 0); // Espera 100ms antes de agregar la clase
    //     }, 10000); // Actualiza el estado cada 3 segundos

    //     return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    // }, []);

    // return (
    //     <div className="container">
    //         <h1 className={animationClass} key={count}>
    //             {count}
    //         </h1>
    //     </div>
    // );
}

export default Carrusel2