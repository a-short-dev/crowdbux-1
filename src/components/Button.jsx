import React from "react";

function Button(props) {
  return (
    <button className="border p-2 button text-white rounded-xl">
      {props.name}
    </button>
  );
}

export default Button;
