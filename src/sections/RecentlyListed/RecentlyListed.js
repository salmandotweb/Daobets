import React, { useState } from "react";
import RecentlyListedCard from "../../components/RecentlyListedCard/RecentlyListedCard";
import "./RecentlyListed.css";
import "../../index.css";

export default function Analytics() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="recently-listed-container">
        <div className="bloc-tabs upper-listed-tab">
          <button
            className={
              toggleState === 1
                ? "tabs  active-tabs active-listed-tabs"
                : "tabs listed-tabs"
            }
            onClick={() => toggleTab(1)}
          >
            Items Listed
          </button>
          <button
            className={
              toggleState === 2
                ? "tabs  active-tabs active-listed-tabs"
                : "tabs listed-tabs"
            }
            onClick={() => toggleTab(2)}
          >
            Bets
          </button>
          <button
            className={
              toggleState === 3
                ? "tabs  active-tabs active-listed-tabs"
                : "tabs listed-tabs"
            }
            onClick={() => toggleTab(3)}
          >
            Characters
          </button>
          <button
            className={
              toggleState === 4
                ? "tabs  active-tabs active-listed-tabs"
                : "tabs listed-tabs"
            }
            onClick={() => toggleTab(4)}
          >
            Shop
          </button>
        </div>

        <div className="listed-tabs">
          <div
            className={
              toggleState === 1
                ? "content listed-content  active-content"
                : "content"
            }
          >
            <RecentlyListedCard
              img="images/avatar-1.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
            <RecentlyListedCard
              img="images/suit-3.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
            <RecentlyListedCard
              img="images/beer.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
          </div>

          <div
            className={
              toggleState === 2
                ? "content listed-content  active-content"
                : "content"
            }
          >
            <RecentlyListedCard
              img="images/suit-2.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
            <RecentlyListedCard
              img="images/suit.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
            <RecentlyListedCard
              img="images/suit-3.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
          </div>

          <div
            className={
              toggleState === 3
                ? "content listed-content  active-content"
                : "content"
            }
          >
            <RecentlyListedCard
              img="images/alita.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
            <RecentlyListedCard
              img="images/professor.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
            <RecentlyListedCard
              img="images/avatar-1.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
          </div>

          <div
            className={
              toggleState === 4
                ? "content listed-content  active-content"
                : "content"
            }
          >
            <RecentlyListedCard
              img="images/beer.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
            <RecentlyListedCard
              img="images/cigar.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
            <RecentlyListedCard
              img="images/beer.png"
              id="#000001"
              range="x"
              price="$000.00"
              eth="Ξ 0.00"
            />
          </div>
        </div>
      </div>
    </>
  );
}
