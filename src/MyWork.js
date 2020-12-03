import React from "react"
import Nav from "./components/Nav/Nav"
import MyWorkPage from "./components/MyWork/MyWorkPage"
import Footer from "./components/Footer/Footer"
import { motion } from "framer-motion"

function MyWork(){
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
            type: "ease",
            duration: 0.5
    }
    const pageStyle={
         }
    return(
        <motion.div 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={pageStyle}
        >
            <Nav/>
            <MyWorkPage/>
            <Footer/>
        </motion.div>
    )
}

export default MyWork