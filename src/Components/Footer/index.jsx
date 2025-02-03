import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Redes sociales */}
        <div className="footer-section">
          <h4>Síguenos en nuestras redes sociales</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icon/instagram.svg" className="face"/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icon/face.svg" className="face"/>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Información de contacto */}
        <div className="footer-section">
          <p>
          <img src="/icon/locacion.svg" className="face-contac"/> Oporapa-Huila
          </p>
          <p>
            <img src="/public/icon/whats.svg" className="face-contac"/> +57 322 8571956
          </p>
        </div>
      </div>

      {/* Créditos */}
      <div className="footer-credits">
        <p>Desing By: IngJuanMa</p>
        <a href="https://github.com/IngJuanMa" target="_blank" rel="noopener noreferrer">
        <img src="/icon/github.svg" className="face-contac"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;