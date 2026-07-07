import { useEffect } from 'react';
import Card from "../components/Card";
import "../styles/products.css"

const productsData = [
    {
        id: 1,
        frontImage: `${import.meta.env.BASE_URL}/img/TF.jpg`,
        backImage: `${import.meta.env.BASE_URL}/img/TB.jpg`,
        badge: 'New Release'
    },
    {
        id: 2,
        frontImage: `${import.meta.env.BASE_URL}/img/NF.jpg`,
        backImage: `${import.meta.env.BASE_URL}/img/NB.jpg`,
        badge: 'Sold Out'
    },
    {
        id: 3,
        frontImage: `${import.meta.env.BASE_URL}/img/BF.jpg`,
        backImage: `${import.meta.env.BASE_URL}/img/BB.jpg`,
        badge: 'Classic'
    },
    {
        id: 4,
        frontImage: `${import.meta.env.BASE_URL}/img/OF.jpg`,
        backImage: `${import.meta.env.BASE_URL}/img/OB.jpg`,
        badge: 'Trending'
    }
];

export default function Products() {

    // Aquí va el código de JavaScript que afecta al DOM (el carrusel)
    useEffect(() => {
        // 1. Buscamos los elementos del carrusel
        const track = document.getElementById('carouselTrack');
        const leftBtn = document.querySelector('.carousel-btn--left');
        const rightBtn = document.querySelector('.carousel-btn--right');

        // 2. Si existen, les asignamos la función de mover
        if (track && leftBtn && rightBtn) {
            const scrollAmount = 280; // Ancho de la tarjeta + separación

            const handleLeft = () => {
                track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            };
            const handleRight = () => {
                track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            };

            // 3. Asignamos los eventos a los botones
            leftBtn.addEventListener('click', handleLeft);
            rightBtn.addEventListener('click', handleRight);

            // 4. (Opcional pero buena práctica) Limpiamos los eventos
            //    cuando el componente se destruya, para evitar errores de memoria.
            return () => {
                leftBtn.removeEventListener('click', handleLeft);
                rightBtn.removeEventListener('click', handleRight);
            };
        }
    }, []);
    return (
        <section className="products">

            <h2>Productos</h2>

            <div className="carousel-wrapper">
                <button className="carousel-btn carousel-btn--left" aria-label="Anterior">&lt;</button>
                <div className="carousel-track" id="carouselTrack">
                    {productsData.map((cat) => (
                        <Card key={cat.id} frontImage={cat.frontImage} backImage={cat.backImage} badgeText={cat.badge} />
                    ))}
                </div>
                <button className="carousel-btn carousel-btn--right" aria-label="Siguiente">&gt;</button>
            </div>
        </section>
    );
}