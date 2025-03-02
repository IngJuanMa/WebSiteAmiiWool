import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100,
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

const izqui = (delay) => ({
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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Redes sociales */}
        <div className="footer-section">

          <motion.h4
            variants={container(0.2)}
            initial="hidden"
            whileInView="show">
            Síguenos en nuestras redes sociales
          </motion.h4>

          <div className="social-icons">

            <motion.a
              variants={container(0.2)}
              initial="hidden"
              whileInView="show"
              href="https://www.instagram.com/amiiwool?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={26} />
            </motion.a>

            <motion.a
              variants={container(0.4)}
              initial="hidden"
              whileInView="show" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <TiSocialFacebookCircular size={30} />
            </motion.a>

          </div>
        </div>

        <motion.div
          variants={container(0.2)}
          initial="hidden"
          whileInView="show"
          className="footer-divider">
        </motion.div>

        {/* Información de contacto */}
        <div className="footer-section">
          <motion.p
            variants={container(0.2)}
            initial="hidden"
            whileInView="show">
            <motion.img
              variants={container(0.4)}
              initial="hidden"
              whileInView="show" src="/icon/locacion.svg" className="face-contac" />
            Oporapa-Huila
          </motion.p>

          <motion.p
            variants={container(0.2)}
            initial="hidden"
            whileInView="show">
            <motion.img
              variants={container(0.4)}
              initial="hidden"
              whileInView="show" src="/icon/whats.svg" className="face-contac" /> +57 3142680307
          </motion.p>
        </div>
      </div>

      {/* Créditos */}
      <div className="footer-credits">
        <motion.p
          variants={container(0.4)}
          initial="hidden"
          whileInView="show">
          Desing By: IngJuanMa
        </motion.p>

        <a href="https://github.com/IngJuanMa" target="_blank" rel="noopener noreferrer">
          <motion.img
          variants={container(0.6)}
          initial="hidden"
          whileInView="show"
           src="/icon/github.svg" className="face-contac" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;