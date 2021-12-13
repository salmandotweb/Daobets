import React from "react";
import "./RecentlyListedCard.css";
import "../../index.css";

export default function RecentlyListedCard({ img, id, range, price, eth }) {
  return (
    <div className="recently-listed-card">
      <div className="listed-card-img">
        <img src={img} alt="img" />
      </div>
      <div>
        <p className="card-id">{id}</p>
        <div className="card-count">Range: {range}</div>
      </div>
      <div className="details">
        <div className="price">{price}</div>
        <div className="etherum">{eth}</div>
        <div className="time">a few seconds ago</div>
      </div>
      <button className="arrow-btn btn">
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
}
