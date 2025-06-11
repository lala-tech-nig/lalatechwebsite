import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold text-white drop-shadow">LalaTech</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-white font-medium hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-medium hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white font-medium hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;