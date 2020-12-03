import React from "react"
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import GitHubIcon from '@material-ui/icons/GitHub'
import "./ContactPage.css"

function ContactPage(){

    
const HomePageStyle = {
    
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    width: '100%',
    paddingTop: "50px",
    height: "40rem",
    justifyContent: "center"
}
const imgStyle ={
    borderRadius: "50%", 
    width: "100%",
    maxWidth: "300px",
    height: "auto"

}
const textStyle ={
    maxWidth: "50rem",
    padding: "8px",
    textAlign: "justify"
}


        

    return(
        <div style={HomePageStyle} >
            <h1>Contact</h1>
            <div className="links">
                <div className="link">
                <a href="mailto:bilguun889@gmail.com" >
                    <MailOutlineOutlinedIcon fontSize="large" />
                </a>
                </div>
                <div className="link">
                <a href="https://github.com/daze17" >
                    <GitHubIcon fontSize="large"/>
                </a>
                </div>
            </div>
        </div>  
    );
}


export default ContactPage;

