import React from "react";

function Question(props) {
  /*const handleColorChange = () => {
    const questionBox = document.getElementById("question-card");
    const iconImg = document.getElementById("icon-item");

    questionBox.addEventListener('click', function(
        questionBox.classList.add('border')
    ))
  };
  */

  return (
    <div className="p-2 rounded-md  m-5 border-color">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold inline mx-2">{props.number}</span>
          <p className="font-semibold inline text-lg">{props.title}</p>
        </div>

        <span className="inline">
          {" "}
          <img src={props.icon} alt="" className="inline w-3.5 h-3.5 mr-7" />
        </span>
      </div>

      <p className="text-sm font-medium ml-2">{props.content}</p>
    </div>
  );
}

export default Question;
