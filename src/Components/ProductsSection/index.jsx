import { useState } from "react";
import "./ProductsSection.css";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { motion } from "framer-motion";



function ProductsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      id: 1,
      name: "Conejita AmiiWool",
      description: "Esta tierna conejita de crochet, con su adorable overol lila y delicados detalles, es el regalo perfecto para quienes aman lo hecho a mano.",
      price: "COP 50,000",
      image: "/Products/2.png",
    },
    {
      id: 2,
      name: "Abejita AmiiWool",
      description: "Dulce, tierna y hecha con amor. Esta abejita tejida a mano con detalles encantadores es perfecta para decorar o abrazar",
      price: "COP 40,000",
      image: "/Products/3.png",
    },
    {
      id: 3,
      name: "Llavero Girasol ",
      description: "Su diseño tierno y color vibrante llenará de alegría tus llaves, bolso o mochila. ¡Llévalo contigo y brilla siempre!",
      price: "COP 60,000",
      image: "/Products/1.png",
    },
    {
      id: 4,
      name: "Ositos Escandalosos",
      description: "Pequeños, adorables y listos para acompañarte a todas partes. Este set de ositos tejidos a mano es ideal para llevar contigo o regalar a un fan de la ternura.",
      price: "COP 60,000",
      image: "/Products/4.png",
    },
    {
      id: 5,
      name: "Ramo Tulipanes",
      description: "Un bouquet que nunca se marchita. 🌸 Este hermoso ramo de tulipanes y flores tejidas es el detalle perfecto para sorprender con amor y dulzura.",
      price: "COP 60,000",
      image: "/Products/5.png",
    },
    {
      id: 6,
      name: "Unicornio Mágico",
      description: "Un toque de fantasía en cada puntada. 💫 Este tierno unicornio tejido a mano es el compañero ideal para llenar de magia y dulzura cualquier rincón.",
      price: "COP 60,000",
      image: "/Products/6.png",
    },
    {
      id: 7,
      name: "Dulces Ovejitas",
      description: "La ternura en su máxima expresión. Estas ovejitas tejidas a mano son el regalo perfecto para transmitir amor y calidez.",
      price: "COP 60,000",
      image: "/Products/7.png",
    },
    {
      id: 8,
      name: "Vaquitas AmiiWool",
      description: "Encanto y dulzura en cada puntada. Estas vaquitas tejidas a mano son perfectas para decorar o para un regalo lleno de ternura.",
      price: "COP 50,000",
      image: "/Products/8.png",
    },
    {
      id: 9,
      name: "Jirafa AmiiWool",
      description: "Con su dulce carita y su outfit encantador, esta jirafa tejida a mano es el compañero perfecto para niños y amantes del crochet.",
      price: "COP 40,000",
      image: "/Products/9.png",
    },
    {
      id: 10,
      name: "Pollito con gorro",
      description: "Este tierno pollito con su gorrito tejido es la combinación perfecta de dulzura y calidez. Ideal para decorar o para un regalo especial hecho a mano.",
      price: "COP 60,000",
      image: "/Products/10.png",
    },
    {
      id: 11,
      name: "Hipopótamo",
      description: "Este adorable hipopótamo con su conjunto de tirantes y botones de madera es perfecto para quienes aman los detalles hechos a mano con amor.",
      price: "COP 60,000",
      image: "/Products/11.png",
    },
    {
      id: 12,
      name: "Pollitos",
      description: "Estos adorables pollitos tejidos en crochet son el detalle perfecto para alegrar cualquier espacio. 🧶✨ Con su cresta roja y su diseño esponjoso, ¡son simplemente irresistibles!",
      price: "COP 60,000",
      image: "/Products/12.png",
    },
    {
      id: 13,
      name: "Conejito Dormido",
      description: "Este tierno conejito tejido en crochet transmite calma y dulzura. 🧸✨ Con su gorrito y chupete, es el compañero perfecto para un descanso lleno de ternura.",
      price: "COP 60,000",
      image: "/Products/13.png",
    },
    {
      id: 14,
      name: "Niño con gorrito",
      description: "Este hermoso muñeco de crochet luce un gorrito y un conjunto de overol con detalles encantadores.",
      price: "COP 60,000",
      image: "/Products/14.png",
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Función para generar el enlace de WhatsApp con el mensaje
  const handleBuy = (product) => {
    const message = `¡Hola! Me gustaría comprar el producto: ${product.name} por ${product.price}.`;
    const whatsappLink = `https://wa.me/+573142680307?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

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

  return (
    <section className="products-section">

      <motion.h2
        variants={bajar(0.2)}
        initial="hidden"
        whileInView="show"
        className="section-title-products">
        Nuestros Productos
      </motion.h2>

      <section className="products-grid">
        {products.map((product) => (

          <motion.div
            variants={bajar(0.1)}
            initial="hidden"
            whileInView="show"
            className="product-card"
            key={product.id}>
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="producto-image"
              />
              <button className="view-button" onClick={() => openModal(product.image)}><BsArrowsFullscreen /></button>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <button className="buy-button" onClick={() => handleBuy(product)}>Comprar <FaWhatsapp size={15} /></button>
            </div>
          </motion.div>
        ))}
      </section>

      {selectedImage && (
        <div className="modal active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Producto ampliado" />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductsSection;
