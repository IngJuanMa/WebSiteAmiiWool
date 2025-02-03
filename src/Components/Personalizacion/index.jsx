import { useState } from "react";
import "./Personalizacion.css";

function CustomizationSection() {
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const productName = e.target.productName.value;
        const colors = e.target.colors.value;
        const size = e.target.size.value;
        const details = e.target.details.value;
        const userName = e.target.userName.value;
        const Direccion = e.target.Direccion.value;

        if (!image) {
            alert("Por favor, no olvides enviar la imagen de referencia directamente por WhatsApp.");
        }

        const message = `Hola, mi nombre es ${userName}.
    y soy de ${Direccion}.
    Quisiera personalizar un producto con los siguientes detalles:
    - Producto: ${productName}
    - Colores preferidos: ${colors}
    - Tamaño: ${size}
    - Detalles adicionales: ${details}
    
    *Nota:* La imagen de referencia será enviada directamente en este chat.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/+573228571956?text=${encodedMessage}`, "_blank");
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    return (
        <section className="customization-section">
            <h2 className="customization-title">Creamos tus ideas con crochet</h2>
            <p className="customization-description">
                En AmiiWool convertimos tus ideas en realidad. Personaliza el producto que deseas con los colores, diseños y detalles que más te gusten.
            </p>

            <form className="customization-form" onSubmit={handleSubmit}>
                <label htmlFor="productName" className="form-label">Tipo de producto:</label>
                <input type="text" id="productName" name="productName" placeholder="Ejemplo: Muñeco, ramo, llavero" className="form-input" required />

                <label htmlFor="colors" className="form-label">Colores preferidos:</label>
                <input type="text" id="colors" name="colors" placeholder="Ejemplo: Rosa, blanco, beige" className="form-input" required />

                <label htmlFor="size" className="form-label">Tamaño (opcional):</label>
                <input type="text" id="size" name="size" placeholder="Ejemplo: Pequeño, mediano, grande" className="form-input" />

                <label htmlFor="details" className="form-label">Detalles adicionales:</label>
                <textarea id="details" name="details" placeholder="Describe cualquier idea adicional o detalles específicos" className="form-textarea"></textarea>

                <label htmlFor="userName" className="form-label">Tu nombre:</label>
                <input type="text" id="userName" name="userName" placeholder="Ingresa tu nombre" className="form-input" required />

                <label htmlFor="Direccion" className="form-label">Tu ciudad:</label>
                <input type="text" id="Direccion" name="Direccion" placeholder="Ejemplo: Bogotá, Cali..." className="form-input" required />

                <label htmlFor="imageUpload" className="form-label">Imagen de referencia (opcional):</label>
                <input type="file" id="imageUpload" name="imageUpload" accept="image/*" className="form-input" onChange={handleImageUpload} />

                <button type="submit" className="form-button">¡Enviar mi idea por WhatsApp!</button>
            </form>
        </section>
    );
}

export default CustomizationSection;
