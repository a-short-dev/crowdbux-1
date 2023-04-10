import React from "react";

function Circle(props) {
  return (
    <div className="flex jusitfy-between items-center">
      <div className=" rounded-full text-white circleColor number text-center border-left mx-7 mb-3">
        <p className="text-md pt-1 font-bold border-left">{props.number}</p>
      </div>

      <div className="">
        <h4 className="mx-3 font-bold text-md mt-12">{props.header}</h4>
        <p className="mx-3 text-sm text-zinc-600">{props.content}</p>
        <p className="mx-3 text-sm text-zinc-600">{props.content2}</p>
        <p className="mx-3 text-sm text-zinc-600">{props.content3}</p>
      </div>
    </div>
  );
}

export default Circle;
