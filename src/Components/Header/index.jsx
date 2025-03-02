import { Link } from "react-router-dom";
import "./Header.css"
import { motion } from "framer-motion";



const bajar = (delay) => ({
  hidden: {
    opacity: 0,
    y: -50,
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


const Header = () => {
  return (
    <motion.header
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="header">

      <div className="logo">
        <motion.img
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src="/logo.png" alt="AmiiWool Logo" className="logo-img" />
      </div>

      <nav className="nav">
        <ul className="nav-list">

          <motion.li
            variants={bajar(0.2)}
            initial="hidden"
            whileInView="show">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </motion.li>

          <motion.li
            variants={bajar(0.4)}
            initial="hidden"
            whileInView="show">
            <Link to="/Productos" className="nav-link">
              Productos
            </Link>
          </motion.li>

          <motion.li
            variants={bajar(0.6)}
            initial="hidden"
            whileInView="show">
            <Link to="/Personalizacion" className="nav-link">
              Hecho para ti
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;