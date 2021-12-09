import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="text-white body-font bg-blue-900">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <a class="flex title-font font-medium items-center  mb-4 md:mb-0">
              <span>
                <img
                  class="w-10 h-10 text-white  p-2  rounded-lg "
                  src="https://i.ibb.co/Rcg9jLZ/youtube.png"
                  slt=""
                  viewBox="0 0 24 24"
                />
              </span>

              <span class="ml-3 text-xl text-white font-bold">Visume</span>
            </a>
            <nav class="list-none mb-10">
              {/* <li>
                <a class="text-white ">First Link</a>
              </li>
              <li>
                <a class="text-white ">Second Link</a>
              </li> */}
              <p>
                2238 Partha Elen Street, <br /> New Jersey, <br /> USA,
                3322145698
              </p>
              <div>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 mb-4 justify-center sm:justify-start">
                  <a class="text-white-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-white-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-white-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-white-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              Useful Links
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white-600 hover:text-white-800">Payment & Tax</a>
              </li>
              <li>
                <a class="text-white-600 hover:text-white-800">
                  Terms of Service
                </a>
              </li>
              <li>
                <a class="text-white-600 hover:text-white-800">Your Account</a>
              </li>
              <li>
                <a class="text-white-600 hover:text-white-800">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              Our Company
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white-600 hover:text-white-800">About us</a>
              </li>
              <li>
                <a class="text-white-600 hover:text-white-800">Media</a>
              </li>
              <li>
                <a class="text-white-600 hover:text-white-800">Blog</a>
              </li>
              <li>
                <a class="text-white-600 hover:text-white-800">Contact us</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              Subscribe to newsletter
            </h2>
            <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="input"
                  placeholder="email address "
                  id="footer-field"
                  name="footer-field"
                  class=" w-full bg-white  rounded border border-gray-300  text-blue outline-none text-white-700 py-1 px-3 leading-8 "
                />
                {/* <span>
                  {" "}
                  <i class="far fa-paper-plane"></i>{" "}
                </span> */}
              </div>
            </div>
            <p class="text-white-500 text-sm mt-2 md:text-left text-center">
              help@visume.link
              <br class="lg:block hidden" />
              396-987 456 885
            </p>
          </div>
        </div>
      </div>

      <div class="w-full max-w-container mx-auto  text-center flex items-center justify-center text-sm text-white mb-4">
        <p>© 2021 Visume</p>
      </div>
    </footer>
  );
};

export default Footer;
