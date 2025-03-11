export default function App() {

    return (
        <div className="full-page">

            <div className="card-box">

                <img className="img-for-desktop" src="./images/image-product-desktop.jpg" alt="" />

                <img className="img-for-mobile" src="./images/image-product-mobile.jpg" alt="" />

                <div className="content-box">

                    <h2>PERFUME</h2>

                    <h1>Gabrielle Essence Eau De Parfum</h1>

                    <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

                    <div className="price">
                        <h1>$149.99</h1>
                        <p>$169.99</p>
                    </div>

                    <button>
                        <img src="./images/icon-cart.svg" alt="" />
                        <p>Add to Cart</p>
                    </button>

                </div>

            </div>

        </div>
    )
}