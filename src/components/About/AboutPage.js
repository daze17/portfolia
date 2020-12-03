import React, {useState, useEffect} from "react"


function AboutPage(){

    
    const HomePageStyle = {
    
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingTop: "50px",
        fontFamily: 'Raleway',
        height: "40rem"
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

        

    return(
        <div style={HomePageStyle} >
            <h1>About me</h1>
            
            
            
            <p style={textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
        </div>  
    );
}


export default AboutPage;

