import React from "react";
import Question from "./Question";

import xIcon from "../assets/x.png";
import addIcon from "../assets/add.png";
function FAQ() {
  return (
    <div className="flex justify-between items-center mx-24 my-7">
      <div>
        <h4 className="text-4xl font-bold">Got any questions?</h4>
        <p className="uppercase text-lg text-zinc-600 text-center">
          we got answers
        </p>
      </div>

      <div>
        <div className="border-color p-2 rounded-md button text-white m-5">
          <Question
            number="1."
            title="What is Crowdbux?"
            icon={xIcon}
            content="Crowdbux is a crowdfunding application that allows users find loans"
          />
        </div>

        <Question
          number="2."
          title="How do I get started on Crowdbux?"
          icon={addIcon}
        />

        <Question
          number="3."
          title="How can I check my credit score?"
          icon={addIcon}
        />

        <Question
          number="4."
          title="What platforms are supported?"
          icon={addIcon}
        />

        <Question
          number="5."
          title="How do I become a vendor?"
          icon={addIcon}
        />
      </div>
    </div>
  );
}

export default FAQ;
