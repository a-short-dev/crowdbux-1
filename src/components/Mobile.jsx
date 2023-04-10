import React from "react";
import Button from "./Button";

import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import woman from "../assets/black-woman.png";

function Mobile() {
  return (
    <div className="circleColor mx-40 rounded-lg p-7 text-white">
      <h3 className="text-3xl font-bold">Our mobile app is on the way</h3>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl">
            With Crowdbux, there is <br />
            always a unique offer <br />
            <span className="text-3xl font-bold">for everyone.</span>
          </p>

          <br />
          <button className="mobile-button border-white font-semibold border p-2 rounded-xl">
            Get early access
          </button>
          <br />
          <br />

          <div className="flex items-center">
            <img src={playstore} className="store-img mr-4" />
            <img src={appstore} className="store-img" />
          </div>
        </div>

        <div>
          <img src={woman} className="mobile-img" />
        </div>
      </div>
    </div>
  );
}

export default Mobile;
