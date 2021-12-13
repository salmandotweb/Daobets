import React from "react";
import "./HeaderCard.css";
import "../../index.css";

export default function HeaderCard({ img, title, subTitle }) {
  return (
    <div class="card header-card">
      <img src={img} class="card-img" alt="img" />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{subTitle}</p>
      </div>
    </div>
  );
}
