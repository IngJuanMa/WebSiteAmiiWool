import { useState } from "react";
import "./ProductsSection.css";

function ProductsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      id: 1,
      name: "Llaveros: Escandalosos",
      description: "Tres piezas de llaveros hechas a crochet, lana de altísima calidad",
      price: "COP 50,000",
      image: "/Products/2.png",
    },
    {
      id: 2,
      name: "Ramo Tulipanes",
      description: "Hermoso ramo de tulipanes de crochet tejidos a mano, lana de altísima calidad.",
      price: "COP 40,000",
      image: "/Products/3.png",
    },
    {
      id: 3,
      name: "Unicornio",
      description: "Unicornio en crochet tejido a mano con detalles únicos.",
      price: "COP 60,000",
      image: "/Products/1.png",
    },
    {
      id: 4,
      name: "Unicornio",
      description: "Unicornio en crochet tejido a mano con detalles únicos.",
      price: "COP 60,000",
      image: "/Products/1.png",
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="products-section">
      <h2 className="section-title-products">Nuestros Productos</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="producto-image"
              />
              <button className="view-button" onClick={() => openModal(product.image)}>🔍</button>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="buy-button">Comprar</button>
            </div>
          </div>
        ))}
      </div>
      
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
