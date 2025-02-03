import "./Banner.css"

const Banner = () => {
    return (
        <section className="banner">
            <img src="/logo.png" />
            <section>
                <h1>AmiiWool</h1>
                <h3>Piezas únicas tejidas con amor</h3>
                <p>¿Buscas algo especial?</p>
                <button>Personalizamos tu idea</button>
            </section>
        </section>
    )
}

export default Banner;