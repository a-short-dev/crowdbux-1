import React from "react";

import providus from "../assets/providus.svg";
import crc from "../assets/crclogo.svg";
import identityPass from "../assets/identitypass-logo.svg";

import mim from "../assets/mim.svg";
import mono from "../assets/mono-real.svg";
import terragon from "../assets/terragon.svg";

function Partners() {
  return (
    <div className="flex justify-between items-center p-10">
      <div>
        <img src={providus} alt="" className="partners" />
      </div>

      <div>
        <img src={crc} alt="" className="partners" />
      </div>

      <div>
        <img src={identityPass} alt="" className="partners" />
      </div>

      <div>
        <img src={terragon} alt="" className="partners" />
      </div>

      <div>
        <img src={mim} alt="" className="partners" />
      </div>

      <div>
        <img src={mono} alt="" className="partners" />
      </div>
    </div>
  );
}

export default Partners;
