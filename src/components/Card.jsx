import React from "react";

function Card(props) {
  return (
    <div className="border-2 shadow-xl p-7 pr-14 rounded-xl">
      <img src={props.img} alt="" className="icon-img" />
      <h4 className="text-lg font-semibold">{props.title}</h4>
      <p className="text-sm text-zinc-600 ">{props.content}</p>
      <p className="text-sm text-zinc-600 ">{props.content2}</p>
      <p className="text-sm text-zinc-600 ">{props.content3}</p>
    </div>
  );
}

export default Card;
