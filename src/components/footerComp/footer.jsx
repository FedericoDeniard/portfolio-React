import React from "react";
import "./footer.css"
import FooterIcons from "../footer-icons/icons"
function FooterComp (){

  function redirect(link){
window.open(link, "_blank")
  }


    return( <>
        <div className="home-area">
        <FooterIcons id="home" imgSrc="assets/icons/home.svg" onClick={() => window.location.href="#intro"}/>
        <FooterIcons className="flag" id="esp" imgSrc="assets/icons/argentina.svg" />
      </div>
      <div className="social-media">
        <FooterIcons id="github" imgSrc="assets/icons/github.svg" onClick={() => redirect("https://github.com/FedericoDeniard")}/>
        <FooterIcons id="linkedin" imgSrc="assets/icons/linkedin.svg" onClick={() => redirect("https://www.linkedin.com/in/federicodeniard/")}/>
      </div>
      <div>
        <FooterIcons id="theme" imgSrc="assets/icons/theme.svg" />
      </div>
      </>
    )
} export default FooterComp