import React from "react"
import Nav from "./components/Nav/Nav"
import ContactPage from "./components/contact/ContactPage"
import Footer from "./components/Footer/Footer"
import { motion } from "framer-motion"

function Contact(){
    const pageVariants = {
        initial: {
            opacity: 0,
            x: "-100vw"
        },
        in:{
            opacity: 1,
            x: 0
        },
        out:{
            opacity: 0,
            x: "100vw"
        }
    }
    const pageTransition={
            type: "tween",
            ease: "anticipate",
            duration: 0.5
    }
    return(
        <motion.div 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Nav/>
            <ContactPage/>
            <Footer/>
        </motion.div>
    )



}



export default Contact