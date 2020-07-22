import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  //    setTimeout(() => {
  //       props.history.push("/about");
  //    }, 2000);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-700 p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">PokeTimes</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4 hover:bg-white hover:border-white rounded px-2 py-2"
          >
            Home
          </Link>
          <NavLink
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4 hover:bg-white hover:border-white rounded px-2 py-2">
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black hover:bg-white hover:border-white rounded px-2 py-2">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);