import React from "react";
import logo from "../assets/logo.svg";

import phone from "../assets/phone-solid 1.png";
import email from "../assets/email.png";

import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-between items-center mx-10 p-7">
        <div>
          <img src={logo} alt="" className="logo" />
          <p className="text-sm capitalize">
            371 Borno Way, Alagomeji, <br />
            Yaba 101245, Lagos
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold">Company</p>
          <ul className="text-sm my-2">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold">Quick Links</p>
          <ul className="text-sm my-2">
            <li>FAQs</li>
            <li>Blog</li>
            <li>Cookies</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold">Contact Us</p>
          <ul className="text-sm my-2">
            <li>
              <img src={phone} className="inline w-3.5 h-3.5" />{" "}
              <span>0700-MYCROWDBUX</span>
            </li>
            <li>
              <img src={email} className="inline w-3.5 h-3.5" />{" "}
              <span>hello@mycrowdbux.com</span>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="flex justify-between items-center p-7 mx-7 text-sm">
        <p>Privacy Terms</p>
        <p>Crowdbux &copy; 2023. All rights reserved.</p>

        <div className="flex justify-between items-center">
          <img src={facebook} alt="" className="w-6 h-6 mx-2" />
          <img src={instagram} alt="" className="w-6 h-6 mx-2" />
          <img src={twitter} alt="" className="w-6 h-6 mx-2" />
          <img src={linkedin} alt="" className="w-6 h-6 mx-2" />
        </div>
      </div>
    </div>
  );
}
