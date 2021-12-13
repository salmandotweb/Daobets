import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MatchCard from "../MatchCard/MatchCard";
import "./CardSlider.css";
import "../../index.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <MatchCard
              league="Champions League"
              team1="Italy"
              img1="images/italy.png"
              score1="0"
              score2="0"
              team2="Barcelona"
              img2="images/barcelona.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Barcelona"
              img1="images/barcelona.png"
              score1="0"
              score2="0"
              team2="Spain"
              img2="images/spain.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Spain"
              img1="images/spain.png"
              score1="0"
              score2="0"
              team2="Italy"
              img2="images/italy.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Italy"
              img1="images/italy.png"
              score1="0"
              score2="0"
              team2="Barcelona"
              img2="images/barcelona.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Barcelona"
              img1="images/barcelona.png"
              score1="0"
              score2="0"
              team2="Spain"
              img2="images/spain.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Spain"
              img1="images/spain.png"
              score1="0"
              score2="0"
              team2="Italy"
              img2="images/italy.png"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
