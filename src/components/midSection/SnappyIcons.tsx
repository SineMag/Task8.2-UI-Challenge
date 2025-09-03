import React from "react";
import Image from "./../../assets/insure-landing-page-master/images/icon-snappy-process.svg";
import Images from "./../../assets/insure-landing-page-master/images/icon-affordable-prices.svg";
import Imagery from "./../../assets/insure-landing-page-master/images/icon-people-first.svg";

export default function Icons() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginLeft: "20%",
        gap: "10px"
      }}
    >
      <div className="snappyIcons">
        <img
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            width: "25%",
            height: "25%",
          }}
          src={Image}
          alt="Snappy Process"
        />
        <p>
          <strong>Snappy Process</strong>
        </p>
        <h6 style={{
          color: "#a59fa5ff"
        }}>
          Our application process can be completed in minutes, not hours. Don’t
          get stuck filling in tedious forms.
        </h6>
      </div>

            <div className="affordablePrices">
        <img
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            width: "25%",
            height: "25%",
          }}
          src={Images}
          alt="Affordable Prices"
        />
        <p>
          <strong>Affordable Prices</strong>
        </p>
        <h6 style={{
          color: "#a59fa5ff"
        }}>
          We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
        </h6>
      </div>

            <div className="peopleFirst">
        <img
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            width: "25%",
            height: "25%",
          }}
          src={Imagery}
          alt="People First"
        />
        <p>
          <strong>People First</strong>
        </p>
        <h6 style={{
          color: "#a59fa5ff"
        }}>
          Our application process can be completed in minutes, not hours. Don’t
          get stuck filling in tedious forms.
        </h6>
      </div>
    </div>
  );
}
