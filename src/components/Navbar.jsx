import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import Button from "./Button";

function NavBar() {
  return (
    <div className="flex justify-between items-center px-2">
      <img src={logo} alt="" className="logo" /> ="mx-3 text-zinc-600"
      <div>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/faqs">FAQs</NavLink>

        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Button name="Become a partner" />
      </div>
    </div>
  );
}

export default NavBar;
