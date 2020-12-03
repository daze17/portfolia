import React, {useState, useEffect} from "react"
import Home from "./Home"
import About from "./About"
import MyWork from "./MyWork"
import Contact from "./Contact"
import {BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/SideDrawer/Backdrop"
import {AnimatePresence, motion } from "framer-motion"
import './App.css'

function App(){
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
    const [navShadow, setNavShadow] = useState(false)
   
    //shadow
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    }, [])

    useEffect(()=>{
        return()=>{
        window.addEventListener('scroll', handleScroll)}
    }, [])

    function handleScroll(e){
        let scroll = window.scrollY
        scroll > 3 ? setNavShadow(true) : setNavShadow(false)
    }
    // toggle
    function toggleDrawerClickHandler(){
        let flipped = !sideDrawerOpen
        setSideDrawerOpen(flipped)
        console.log(sideDrawerOpen)
    }
    function closeDrawerClickHandler() {
        setSideDrawerOpen(false)
    }
    let backdrop
    if(sideDrawerOpen) {
        backdrop = <Backdrop closeDrawer={closeDrawerClickHandler}/>
        
    }

    

    return(
        <Router>
            <div onScroll={handleScroll} className="App">
                <Nav toggleDrawer={toggleDrawerClickHandler} shadow={navShadow}/>
                <SideDrawer
                isShown={sideDrawerOpen}
                closeDrawer={closeDrawerClickHandler}
                />
                {backdrop}
                <AnimatePresence exitBeforeEnter>
                    <Switch >
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/mywork" component={MyWork}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </AnimatePresence>
            </div>
        </Router>
    )
}

export default App