import { useState } from "react";
import "./Personalizacion.css";
import { motion } from "framer-motion";

function CustomizationSection() {

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
        window.open(`https://wa.me/+573142680307?text=${encodedMessage}`, "_blank");
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const bajar = (delay) => ({
        hidden: {
            opacity: 0,
            x: -50,
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

    return (
        <section className="customization-section">

            <motion.h2
                variants={bajar(0.2)}
                initial="hidden"
                whileInView="show"
                className="customization-title">
                Creamos tus ideas con crochet
            </motion.h2>

            <motion.p
                variants={bajar(0.4)}
                initial="hidden"
                whileInView="show"
                className="customization-description">
                En AmiiWool convertimos tus ideas en realidad. Personaliza el producto que deseas con los colores, diseños y detalles que más te gusten.
            </motion.p>

            <form className="customization-form" onSubmit={handleSubmit}>
                <motion.label
                    variants={bajar(0.4)}
                    initial="hidden"
                    whileInView="show"
                    htmlFor="productName" className="form-label">
                    Tipo de producto:
                </motion.label>

                <motion.input
                    initial={{ opacity: 0, scale: 0.5 }} // Empieza pequeño e invisible
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    type="text" id="productName" name="productName"
                    placeholder="Ejemplo: Muñeco, ramo, llavero" className="form-input" required />

                <motion.label
                    variants={bajar(0.4)}
                    initial="hidden"
                    whileInView="show"
                    htmlFor="colors" className="form-label">
                    Colores preferidos:
                </motion.label>
                <motion.input
                    initial={{ opacity: 0, scale: 0.5 }} // Empieza pequeño e invisible
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    type="text" id="colors" name="colors"
                    placeholder="Ejemplo: Rosa, blanco, beige" className="form-input" required />

                <motion.label
                    variants={bajar(0.4)}
                    initial="hidden"
                    whileInView="show"
                    htmlFor="size" className="form-label">
                    Tamaño (opcional):
                </motion.label>
                <motion.input
                    initial={{ opacity: 0, scale: 0.5 }} // Empieza pequeño e invisible
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    type="text" id="size" name="size"
                    placeholder="Ejemplo: Pequeño, mediano, grande" className="form-input" />

                <motion.label
                    variants={bajar(0.4)}
                    initial="hidden"
                    whileInView="show"
                    htmlFor="details"
                    className="form-label">
                    Detalles adicionales:
                </motion.label>
                <motion.textarea
                    initial={{ opacity: 0, scale: 0.5 }} // Empieza pequeño e invisible
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    id="details" name="details"
                    placeholder="Describe cualquier idea adicional o detalles específicos"
                    className="form-textarea" />

                <motion.label
                    variants={bajar(0.4)}
                    initial="hidden"
                    whileInView="show"
                    htmlFor="userName" className="form-label">
                    Tu nombre:
                </motion.label>
                <motion.input
                    initial={{ opacity: 0, scale: 0.5 }} // Empieza pequeño e invisible
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    type="text" id="userName" name="userName"
                    placeholder="Ingresa tu nombre" className="form-input" required />

                <motion.label
                    variants={bajar(0.4)}
                    initial="hidden"
                    whileInView="show"
                    htmlFor="Direccion" className="form-label">
                    Tu ciudad:
                </motion.label>
                <motion.input
                    initial={{ opacity: 0, scale: 0.5 }} // Empieza pequeño e invisible
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    type="text" id="Direccion" name="Direccion"
                    placeholder="Ejemplo: Bogotá, Cali..." className="form-input" required />

                <motion.label
                    variants={bajar(0.4)}
                    initial="hidden"
                    whileInView="show"
                    htmlFor="imageUpload" className="form-label">
                    Puedes enviar una imagen de referencia  directamente en nuestro chat.
                </motion.label>

                <motion.button
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    type="submit" className="form-button">
                    ¡Enviar mi idea por WhatsApp!
                </motion.button>
            </form>
        </section>
    );
}

export default CustomizationSection;
