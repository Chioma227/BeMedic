import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  let menu = document.querySelector(".menu");
  const toggleShow = () => {
    menu.classList.add("active");
  };
  return (
    <div>
      <nav className="header">
        <img
          className="sm:w-fit sm:m-auto"
          src="https://themes.muffingroup.com/be/medic/wp-content/uploads/2014/11/medic.png"
          alt="logo"
        />
        <ul className="menu sm:hidden lg:flex lg:items-center lg:justify-center gap-4 sm:fixed sm:bg-white sm:right-80 sm:h-64 sm:w-72 sm:top-36 sm:text-left sm:text-xl sm:leading-10 sm:px-5">
          <li>
            <Link to="/">Home</Link>
          </li>{" "}
          <span></span>
          <li>
            <Link to="about">About Our Clinic</Link>
          </li>{" "}
          <span></span>
          <li>
            <Link to="services">What We Offer</Link>
          </li>{" "}
          <span></span>
          <li>
            <Link to="appointment">Make An Appointment</Link>
          </li>
        </ul>
        <div
          className="menu-btn lg:hidden sm:block sm:ml-auto mr-4"
          onClick={toggleShow}
        >
          <FaBars />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
