import Card from "../components/Card";
import "../styles/products.css"

const productsData = [
    {
        id: 1,
        frontImage: '/img/TF.jpg',
        backImage: '/img/TB.jpg',
        badge: 'New Release'
    },
    {
        id: 2,
        frontImage: '/img/NF.jpg',
        backImage: '/img/NB.jpg',
        badge: 'Trending'
    },
    {
        id: 3,
        frontImage: '/img/BF.jpg',
        backImage: '/img/BB.jpg',
        badge: 'Classic'
    },
    {
        id: 4,
        frontImage: '/img/OF.jpg',
        backImage: '/img/OB.jpg',
        badge: 'Trending'
    }
];

export default function Products() {
    return (
        <section className="products">

            <h2>Productos</h2>

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
        </section>
    );
}