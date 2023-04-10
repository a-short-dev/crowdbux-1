import React from "react";
import Icons from "./Icons";
import Button from "./Button";

import securedImg from "../assets/Group 5.png";
import controlImg from "../assets/Group 6.png";
import flexibleImg from "../assets/Group 7.png";

function Why() {
  return (
    <div className="grid items-center mx-12">
      <h3 className="text-3xl font-bold">
        We offer a powerful tool to ease the process of <br />
        getting a loan
      </h3>
      <br />
      <br />
      <br />
      <div className="flex justify-between items-center mx-16">
        <Icons
          img={securedImg}
          title="Secured Transactions"
          content="No more hassles when it comes"
          content2="to the security of your money"
        />

        <Icons
          img={controlImg}
          title="Full User Control"
          content="Take control of your finances and"
          content2="achieve your financial goals"
        />

        <Icons
          img={flexibleImg}
          title="Flexible Repayments"
          content="Sign up now and enjoy the"
          content2="freedom to repay on your terms"
        />
      </div>
      <br />
      <br />
      <br />
      <div className="text-center mt-3">
        <Button name="Get early access" />
      </div>
    </div>
  );
}

export default Why;
