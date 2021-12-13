import React from "react";
import MarketNav from "../../components/MarketNav/MarketNav";
import MarketMenu from "../../components/MarketMenu/MarketMenu";
import "./ItemsListed.css";
import MarketCard from "../../components/MarketCard/MarketCard";
import "../../index.css";

export default function ItemsListed() {
  return (
    <div>
      <MarketNav />
      <MarketMenu />
      <div className="container items-listed-container">
        <div className="row row-cols-2 row-cols-md-3 items-listed-wrapper">
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/avatar-1.png"
            price="$00"
            eth="Ξ 0.00"
          />
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/avatar-2.png"
            price="$00"
            eth="Ξ 0.00"
          />
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/alita.png"
            price="$00"
            eth="Ξ 0.00"
          />
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/suit.png"
            price="$00"
            eth="Ξ 0.00"
          />
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/suit-2.png"
            price="$00"
            eth="Ξ 0.00"
          />
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/suit-3.png"
            price="$00"
            eth="Ξ 0.00"
          />
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/beer.png"
            price="$00"
            eth="Ξ 0.00"
          />
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/cigar.png"
            price="$00"
            eth="Ξ 0.00"
          />
          <MarketCard
            id="#0000"
            range="Range: x"
            img="images/beer.png"
            price="$00"
            eth="Ξ 0.00"
          />
        </div>
      </div>
    </div>
  );
}
