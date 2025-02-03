import { Link } from "react-router-dom";
import "./VerProductos.css";

const VerProductos = ()=>{
    return (
        <section className="featured-products">
      <h2 className="section-title">Aquí encontrarás el regalo perfecto</h2>
      <p className="section-subtitle">Algunos de nuestros mejores productos:</p>

      <div className="products-container">
        {/* Producto 1 */}
        <div className="product-card">
          <img
            src="/osos.jpeg" // Ruta de la imagen del producto
            alt="Escandalosos"
            className="product-image"
          />
          <div className="product-info">Escandalosos</div>
        </div>

        {/* Producto 2 */}
        <div className="product-card">
          <img
            src="/tulipanes.jpeg" // Ruta de la imagen del producto
            alt="Tulipanes"
            className="product-image"
          />
          <div className="product-info">Tulipanes</div>
        </div>

        {/* Producto 3 */}
        <div className="product-card">
          <img
            src="/unicornio.jpeg" // Ruta de la imagen del producto
            alt="Unicornio"
            className="product-image"
          />
          <div className="product-info">Unicornio</div>
        </div>
      </div>

      <Link to="/Productos"  className="products-button">Ver nuestros productos</Link>

      <p className="section-description">
        En AmiiWool creemos que cada puntada cuenta una historia. Creamos
        muñecos y accesorios tejidos a mano.
      </p>

      <div className="section-idea">
        <img src="/dino.png"/>
        <div className="section-idea-text">
          <h2>¿Tienes una idea en mente?</h2>
          <p>Nosotros la tejemos</p>
          <Link to="/Personalizacion" className="section-idea-text-boton">Personalizamos tu idea</Link>
        </div>
      </div>
    </section>
    )
}

export default VerProductos;