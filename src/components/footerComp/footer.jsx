import React from "react";
import "./footer.css"
import FooterIcons from "../footer-icons/icons"
import { useTranslation } from "react-i18next";
function FooterComp (){
  const { i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  function redirect(link){
window.open(link, "_blank")
  }

  function getLanguage () {
    return i18n.language;
  }

  function changeFlag (){
    let language = getLanguage()
    if(language === "es"){
      return "assets/icons/british.svg";
    }else{
      return "assets/icons/argentina.svg";
    }
  }

    return( <>
        <div className="home-area">
        <FooterIcons id="home" imgSrc="assets/icons/home.svg" onClick={() => window.location.href="#intro"}/>
        <FooterIcons className="flag" id="esp" imgSrc={changeFlag()} onClick={() =>
          handleChangeLanguage(i18n.language === "en" ? "es" : "en")
        }/>
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