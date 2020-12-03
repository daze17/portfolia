import React, { useState, useEffect } from 'react'
import classes from './Footer.module.css'
import randomcolor from "randomcolor"

function Footer(){
  const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    useEffect(() => {
        const intervalId = setInterval(() => {
             setCount(prevCount => prevCount + 1)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [])
    
    useEffect(() => {
        setColor(randomcolor())
    }, [count])
  
  
  
  return (
    <div className={classes.footer} style={{background: "#fff"}}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        ~ Built by Bilguun ~
      </a>
    </div>
  )
}

export default Footer
