import React from "react";

const Glory = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="flex flex-wrap w-full mb-20 flex-col items-start text-start">
          <p class=" text-start w-full leading-relaxed text-gray-500">
            simple steps to glory
          </p>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            How to get Started
          </h1>
        </div>
        <div class="container flex justify-between px-5 py-24 mx-auto">
          <div class="relative flex justify-center xl:w-1/2 md:w-1/2 p-4  rounded-3xl">
            <img
              class=" h-25 rounded-2 bg-green-300 -mt-50   items-left w-25 rounded-2  h-50   mx-auto "
              src="https://i.ibb.co/6PFck16/man1.png"
              alt=""
            />
          </div>
          <div class="relative flex justify-center xl:w-1/2 md:w-1/2 p-4 ">
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/2 md:w-1/2 p-4">
                <div class="border border-gray-100 bg-white shadow-xl  p-6 rounded-lg">
                  <div class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"></div>
                  <span class="text-blue-700 text-left">
                    <i class="fas fa-user-plus"></i>
                  </span>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Create an account
                  </h2>
                  <p class="leading-relaxed text-base">
                    You need to create an account. You can do this by clicking
                    on the Sign up button above.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/2 md:w-1/2 p-4">
                <div class="border border-gray-100 bg-white shadow-xl p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"></div>
                  <span class="text-blue-700 text-left">
                    <i class="fas fa-user-plus"></i>
                  </span>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Choose a theme
                  </h2>
                  <p class="leading-relaxed text-base">
                    Vertical, short or long. We give you the control to make
                    your video resume. We’ve more than 150+ themes.
                  </p>
                </div>
              </div>

              <div class="xl:w-1/2 md:w-1/2 p-4">
                <div class="border border-gray-100 bg-white shadow-xl p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"></div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Edit on the Web
                  </h2>
                  <p class="leading-relaxed text-base">
                    Add your video clip(s), texts, decoration and effects. All
                    these can be done on the web.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/2 md:w-1/2 p-4">
                <div class="border border-gray-200 bg-white shadow-xl p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"></div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Ready to Fly
                  </h2>
                  <p class="leading-relaxed text-base">
                    You’re all set to get hired with flying colors now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Glory;
