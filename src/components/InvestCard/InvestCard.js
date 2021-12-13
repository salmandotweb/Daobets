import React from "react";
import "./InvestCard.css";
import "../../index.css";

export default function InvestCard({ img, subTitle }) {
  return (
    <>
      <div class="card invest-card">
        <img src={img} class="avatar" alt="img" />
        <div class="card-body">
          <p class="card-text subtitle">{subTitle}</p>
        </div>
      </div>
    </>
  );
}
