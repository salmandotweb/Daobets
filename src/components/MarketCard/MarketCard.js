import React from "react";
import "./MarketCard.css";
import "../../index.css";

export default function MarketCard({ id, range, img, price, eth }) {
  return (
    <>
      <div class="col">
        <div class="card market-card">
          <div className="market-card-ids">
            <p className="market-card-id">{id}</p>
            <p className="market-card-range">{range}</p>
          </div>
          <div className="market-card-img">
            <img src={img} class="card-img-top" alt="img" />
          </div>
          <div className="btn-price-container">
            <button className="btn buy-btn">Buy Now</button>
            <div class="market-card-price">
              <h5 class="market-card-dollar">{price}</h5>
              <p className="market-card-eth">{eth}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
