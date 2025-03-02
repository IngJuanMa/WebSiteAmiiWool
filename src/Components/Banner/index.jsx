import "./Banner.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: 10,
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

const Banner = () => {
    return (
        <section className="banner">

            <motion.img
                variants={container(0.2)}
                initial="hidden"
                whileInView="show"
                src="/logo.png" />

            <section style={{ display: "flex", flexDirection: "column", alignContent: "center", boxSizing: "border-box" }}>

                <motion.h1
                    variants={subir(0.3)}
                    initial="hidden"
                    whileInView="show">
                    AmiiWool
                </motion.h1>

                <motion.h3
                    variants={subir(0.5)}
                    initial="hidden"
                    whileInView="show">
                    Piezas únicas tejidas con amor
                </motion.h3>

                <motion.p
                    variants={subir(0.6)}
                    initial="hidden"
                    whileInView="show">
                    ¿Buscas algo especial?
                </motion.p>

                <motion.div
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                initial={{ opacity: 0, scale: 0.5}}
                whileInView={{ opacity: 1, scale: 1 }}
                className="banner-button">
                    <Link to="/Productos"
                     style={{textDecoration:"none", color:"var(--color-Marron)"}} >Mira nuestros productos</Link>
                </motion.div>

            </section>
        </section>
    )
}

export default Banner;