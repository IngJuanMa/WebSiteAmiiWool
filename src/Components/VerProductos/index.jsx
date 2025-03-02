import { Link } from "react-router-dom";
import "./VerProductos.css";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const subir = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const VerProductos = () => {
  return (
    <section className="featured-products">

      <motion.h2
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="section-title">
        Aquí encontrarás el regalo perfecto
      </motion.h2>

      <motion.p
        variants={subir(0.4)}
        initial="hidden"
        whileInView="show"
        className="section-subtitle">
        Algunos de nuestros mejores productos:
      </motion.p>

      <div className="products-container">
        {/* Producto 1 */}
        <motion.div
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="producto-card">
          <img
            src="/Products/2.png" // Ruta de la imagen del producto
            alt="Conejita"
            className="product-image"
          />
          <div className="producto-info">Conejita</div>
        </motion.div>

        {/* Producto 2 */}
        <motion.div
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="producto-card">
          <img
            src="/Products/1.png" // Ruta de la imagen del producto
            alt="Girasol"
            className="product-image"
          />
          <div className="producto-info">Girasol</div>
        </motion.div>

        {/* Producto 3 */}
        <motion.div
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="producto-card">
          <img
            src="/Products/3.png" // Ruta de la imagen del producto
            alt="Abejita"
            className="product-image"
          />
          <div className="producto-info">Abejita</div>
        </motion.div>
      </div>


      <motion.div
        variants={subir(0.6)}
        initial="hidden"
        whileInView="show">
        <Link to="/Productos" className="products-button">Ver nuestros productos</Link>
      </motion.div>


      <motion.p
        variants={subir(0.7)}
        initial="hidden"
        whileInView="show"
        className="section-description">
        En AmiiWool creemos que cada puntada cuenta una historia. Creamos
        muñecos y accesorios tejidos a mano.
      </motion.p>

      <div className="section-idea">

        <motion.img
          variants={subir(0.4)}
          initial="hidden"
          whileInView="show"
          src="/dino.png" />

        <div className="section-idea-text">

          <motion.h2
            variants={subir(0.4)}
            initial="hidden"
            whileInView="show">
            ¿Tienes una idea en mente?
          </motion.h2>

          <motion.p
            variants={subir(0.6)}
            initial="hidden"
            whileInView="show">
            Nosotros la tejemos
          </motion.p>

          <motion.div
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}>
            <Link to="/Personalizacion" className="section-idea-text-boton">Personalizamos tu idea</Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default VerProductos;