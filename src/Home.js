import React from "react"
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import { motion } from "framer-motion"
import { duration } from "@material-ui/core";

function Home(){
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
        <HomePage />
            <Footer/>
        </motion.div>
    )
}
export default Home