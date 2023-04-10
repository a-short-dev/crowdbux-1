import React from "react";
import arrow from "../assets/arrow.png";

function Title(props) {
  return (
    <div className="px-3 mt-7">
      <img src={arrow} className="inline" />
      <h4 className="textPurple text-lg font-bold inline mx-3">
        {props.title}
      </h4>
    </div>
  );
}

export default Title;
