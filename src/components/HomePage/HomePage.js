import { yellow } from '@material-ui/core/colors'
import React from 'react'
import './HomePage.css'

function HomePage(){
const HomePageStyle = {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingTop: "50px",
    fontFamily: 'Raleway'
}
const imgStyle ={
    borderRadius: "50%", 
    width: "100%",
    maxWidth: "300px",
    maxHeight: "300px"
}
const textStyle ={
    maxWidth: "50rem",
    padding: "8px",
    margin: "0 2rem"
    
}
const today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
const dd = weekday[today.getDay()];

    return(
        <div style={HomePageStyle} className="container" >
            <div style={textStyle} className="aboutMe">
            <h1>Hi, I'm Bilguun Baasansuren</h1>
            <h1 style={{fontSize:"3rem"}}>I'm software developer</h1>
            <p>I'm grateful to work with you!</p>
            <div style={{display: "flex", justifyContent: "center"}}>
            <img style={imgStyle} src="IMG_1.JPG"/>
            </div>
            <p style={{paddingTop: "2rem",  
            textAlign: "justify"}} >
                Hello, I'm learning Information System for 4+ years in National University of Mongolia.
                Currantly living in Ulaanbaatar, Mongolia.
                I specialized with front-end development. I am also well-versed in numerous 
                front-end programming languages including HTML, CSS, Javascript, React etc.
                I eagerly look forward to work as an full-stack developer in near future.


            </p>
                  <div className="niceday">Have a nice {dd}!</div>
        
            </div>
        </div>  
    );
}


export default HomePage;

