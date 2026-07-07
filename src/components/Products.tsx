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
    return (
        <section className="products">
            <h2>Productos Populares</h2>
            <div className="products-grid">
                {productsData.map((cat) => (
                    <Card
                        key={cat.id}
                        frontImage={cat.frontImage}
                        backImage={cat.backImage}
                        badgeText={cat.badge}
                    />
                ))}
            </div>
            <button className="all-products-button">
                <a href="https://www.instagram.com/luminous.cr/" className="url-text">
                    Ver todos los productos
                </a>
            </button>
        </section>
    );
}