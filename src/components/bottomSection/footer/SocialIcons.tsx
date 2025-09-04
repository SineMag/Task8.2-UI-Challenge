import React from "react";
import Image from "../../../assets/insure-landing-page-master/images/icon-facebook.svg";
import Twitter from "../../../assets/insure-landing-page-master/images/icon-twitter.svg";
import Pinterest from "../../../assets/insure-landing-page-master/images/icon-pinterest.svg";
import Instagram from "../../../assets/insure-landing-page-master/images/icon-instagram.svg";
import InsureLogo from "../../../assets/insure-landing-page-master/images/logo.svg";
export default function SocialIcons() {
  return (
    <div className="socialIconsContainer" style={{
        display: "flex",
        marginTop: "3rem",        
        width: "100%",
        // height: "15vh",
        justifyContent: "space-between",
        padding: "1.5rem",
        alignItems: "start",
    }}>

<div className="insureImage">
        <img style={{
            width: "40%",
            height: "15%",

        }} src={InsureLogo} alt="Insure Logo" />
</div>
    <div className="socialIcons" 
    >
      <div style={{
            fontSize: "2px",       

        }} >
        <img style={{
            width: "15px",
            height: "15px",
            marginRight: "0.5rem",
        }} src={Image} alt="Facebook" />
        <img style={{
            width: "15px",
            height: "15px",
            marginRight: "1rem",
        }}  src={Twitter} alt="Twitter" />
        <img style={{
            width: "15px",
            height: "15px",
            marginRight: "1rem",
        }}  src={Pinterest} alt="Pinterest" />
        <img style={{
            width: "15px",
            height: "15px",
            marginRight: "1rem",
        }}  src={Instagram} alt="Instagram" />
      </div>
    </div>
    </div>
  );
}
