import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";

export default function Layout({ english, handleClick }) {
  return (
    <div className='root'>
      <img src="../../../images/bg-image.png" alt="" className="bg-image" />
      <Navbar english={english} handleClick={handleClick} />
      <div className='container'>
        <Contact english={english} handleClick={handleClick} />
        <Outlet />
      </div>
    </div>
  );
}