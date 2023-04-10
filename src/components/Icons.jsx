import React from "react";

function Icons(props) {
  return (
    <div className="items-center text-center">
      <img src={props.img} alt="" className="ml-12" />
      <h4 className="font-semibold text-lg text-center">{props.title}</h4>
      <p className="text-sm">{props.content}</p>
      <p className="text-sm">{props.content2}</p>
    </div>
  );
}

export default Icons;
