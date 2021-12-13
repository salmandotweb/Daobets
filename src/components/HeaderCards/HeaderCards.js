import React from "react";
import HeaderCard from "../HeaderCard/HeaderCard";
import "./HeaderCards.css";

export default function HeaderCards() {
  return (
    <div className="header__cards-wrapper">
      <div className="header__cards-container">
        <HeaderCard
          img="images/create-icon.png"
          title="Create a Bet"
          subTitle="Users can create a bet by minting an NFT and allocating their bet amount with any top crypto coins. Once NFTbet in minted, it goes to DAObets market for other users to play the bets. 
"
        />
        <HeaderCard
          img="images/play-icon.png"
          title="Take a Bet"
          subTitle="Users can challenge a bet by accepting the NFTbets. Once the bet is accepted the bet amount goes to an escrow wallet till the event results are out. "
        />
        <HeaderCard
          img="images/groups-icon.png"
          title="Claim a Winning Bet"
          subTitle="Users can claim their winning amount by sending their winning NFTbet to the vault for burning. Once the NFTbet is sent to the vault, user can claim the bet amount."
        />
      </div>
    </div>
  );
}
