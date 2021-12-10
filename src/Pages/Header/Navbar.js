import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header class=" body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center  mb-4 md:mb-0">
            <span>
              <img
                class="w-10 h-10 text-blue-700 p-2  rounded-lg "
                src="https://i.ibb.co/Rcg9jLZ/youtube.png"
                slt=""
                viewBox="0 0 24 24"
              />
            </span>

            <span class="ml-3 text-xl text-blue-700 font-bold">Visume</span>
          </a>
          <nav class="md:ml-auto md:mr-auto font-bold flex flex-wrap items-center text-base justify-center">
            <Link to="/social" class="mr-5 text-blue-700">
              About
            </Link>
            <Link to="/pricing" class="mr-5 text-blue-700">
              Pricing
            </Link>
            <Link to="/testimonials" class="mr-5 text-blue-700">
              Testimonials
            </Link>
            <Link to="/contact" class="mr-5 text-blue-700">
              Contact
            </Link>
          </nav>
          <Link to="/login">
            <button class="mr-5 inline-flex items-center text-white bg-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-white  hover:text-blue-700 rounded   mt-4 md:mt-0">
              Sign in
            </button>
          </Link>
          <Link to="/signUp">
            <button class=" text-white bg-transparent inline-flex items-center  bg-blue-800  border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-blue-700 rounded  mt-4 md:mt-0">
              Sign up
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
