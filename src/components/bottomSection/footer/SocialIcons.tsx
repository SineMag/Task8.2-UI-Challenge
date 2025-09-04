import React from "react";
import Image from "../../../assets/insure-landing-page-master/images/icon-facebook.svg";
import Twitter from "../../../assets/insure-landing-page-master/images/icon-twitter.svg";
import Pinterest from "../../../assets/insure-landing-page-master/images/icon-pinterest.svg";
import Instagram from "../../../assets/insure-landing-page-master/images/icon-instagram.svg";

export default function SocialIcons() {
  return (
    <div className="socialIcons"
      style={{
        display: "flex",
        border: "1px solid red",
        width: "100%",
        height: "15vh",
        flexDirection: "row",
        justifyContent: "end",
      }}
    >
      <div className="facebookIcon"  style={{
            fontSize: "2px",
        }} >
        <img src={Image} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
        <img src={Pinterest} alt="Pinterest" />
        <img src={Instagram} alt="Instagram" />
      </div>
    
    </div>
  );
}
