import React from "react";

const Contact = () => {
  return (
    <div class="bg-aqua ">
      <section class=" body-font relative ">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-col text-center w-full mb-12 ">
            <p class="sm:text-xl text-2xl  font-bold mb-4 text-green-400">
              Lets Talk
            </p>
            <p class="lg:w-2/4 mx-auto leading-relaxed text-blue-700 font-bold">
              We're here to help you!
            </p>
          </div>
          <div class="border border-gray-200  bg-green-300">
            <div class="lg:w-1/2 md:w-2/3 mx-auto mt-20 mb-20">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <input
                      placeholder="Name *"
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <input
                      placeholder="Your Email *"
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <input
                      placeholder="Your Mobile No *"
                      type="number"
                      id="number"
                      name="number"
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <input
                      placeholder="Education/Profession(optional) *"
                      type="text"
                      id="text"
                      name="text"
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2 w-full">
                  <div class="relative">
                    <textarea
                      id="message"
                      name="message"
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Lets Talk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
