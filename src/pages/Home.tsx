import "../styles/home.css"
import Navbar from "../components/Navbar";
import Products from "../components/Products.tsx";
import Footer from "../components/Footer.tsx";
import Promo from "../components/Promo";

export default function Home() {
    return (
        < >
            <Navbar />
            <Products />
        </>
    );
}