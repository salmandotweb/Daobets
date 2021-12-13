import React from "react";
import "./PartnerBanner.css";
import "../../index.css";

export default function PartnerBanner() {
  return (
    <div
      className="partner-banner"
      style={{
        background: "url(images/bg-image.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 data-aos="fade-left">Our Partners</h1>
      <div className="logos">
        <div className="partner-logo">
          <img src="images/partner-2.png" alt="logo" />
        </div>
        <div className="partner-logo">
          <img src="images/partner-3.png" alt="logo" />
        </div>
        <div className="partner-logo">
          <img src="images/partner-1.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
}
