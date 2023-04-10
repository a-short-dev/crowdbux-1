import React from "react";
import Card from "./Card";

import circleIcon from "../assets/clock.svg";
import pigIcon from "../assets/pig.png";

import buildIcon from "../assets/build.png";
import withdrawIcon from "../assets/withdraw.png";
import display from "../assets/display.png";

function Features() {
  return (
    <div>
      <br />
      <h3 className="text-3xl font-bold mx-20">
        Do more with <br /> Crowdbux
      </h3>
      <br />
      <br />
      <div className="flex justify-between items-center mx-20">
        <div>
          <Card
            img={buildIcon}
            title="Build your credit score"
            content="A high credit score opens doors to"
            content2="better loan rates, credit card offers"
            content3="and overall financial stability"
          />
          <br />
          <Card
            img={pigIcon}
            title="Save money your way"
            content="Don't pay more than you need to on"
            content2="your loans. Get the best deals and"
            content3="keep more money in your pocket"
          />
        </div>

        <div>
          <Card
            img={circleIcon}
            title="Keep track of your loan history"
            content="A high credit score opens doors to"
            content2="better loan rates, credit card offers"
            content3="and overall financial stability"
          />
          <br />
          <Card
            img={withdrawIcon}
            title="Withdraw your funds safely"
            content="Don't pay more than you need to on"
            content2="your loans. Get the best deals and"
            content3="keep more money in your pocket"
          />
        </div>

        <div>
          <img src={display} className="features-img" />
        </div>
      </div>
    </div>
  );
}

export default Features;
