import React from "react";
import compare from "../assets/compare.png";
import Circle from "./Circle";

import compareImg from "../assets/compare.png";

function How() {
  return (
    <div className="flex justify-between items-center px-40 py-2">
      <div>
        <h3 className="text-2xl font-bold">
          We Help You Get <br />
          The Best Loans At <br />
          The Cheapest Rates
        </h3>
        <br />
        <img src={compareImg} className="displayImg" />
      </div>

      <div>
        <Circle
          number="1"
          header="Create an account with Crowdbux"
          content="Fill in your details in the application"
          content2="form and provided required documents"
          content3="to create an account"
        />

        <Circle
          number="2"
          header="Grow your credit line"
          content="Take control of your finances and achieve "
          content2="your financial goals. With a stronger credit"
          content3="line, you can access more funds"
        />

        <Circle
          number="3"
          header="Match with the very best deals"
          content="Our loan matching service connects you"
          content2=" with top lenders, so you can find the perfect"
          content3=" loan for your financial goals"
        />

        <Circle
          number="4"
          header="Compare various loan offers and rates"
          content="Navigate the maze of loan options with "
          content2="ease! Our loan comparison tool makes it "
          content3="simple to find the best rates and offers"
        />
      </div>
    </div>
  );
}

export default How;
