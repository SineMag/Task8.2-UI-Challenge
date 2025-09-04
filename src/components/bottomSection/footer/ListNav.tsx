import React from "react";
import Image from "../../../assets/insure-landing-page-master/images/logo.svg";
export default function ListNav() {
  return (
    <div>
      <div className="bottomnav">
        <ul
          style={{
            color: "hsl(233, 8%, 62%)",
            fontSize: "8px",
            listStyleType: "none",
            height: "5vh",
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            boxSizing: "border-box",
          }}
        >
          <li
            style={{
              paddingLeft: "1.5rem",
            }}
          >
            OUR COMPANY
          </li>
          <li>HELP ME</li>
          <li>CONTACT</li>
          <li>OTHERS</li>
        </ul>
      </div>
    </div>
  );
}
