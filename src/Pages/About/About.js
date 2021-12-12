import React from "react";

const About = () => {
  return (
    <div>
      <div class="text-left ml-20 mb-8"></div>
      <figure class=" md:flex bg-gray-100 rounded-xl p-8 md:p-0  mr-20">
        <div class="pt-6 md:p-8 text-center items-center md:text-left space-y-4">
          <p class="text-green-300 font-bold">We’re on a mission</p>
          <h1 class="text-blue-700 font-bold text-3xl ">About Visume</h1>
          <p class="text-blue-800 font-bold">
            Trusted by people around{" "}
            <span class="text-red-300">38 countries </span>
          </p>
          <blockquote>
            <p class="text-lg font-semibold">
              With the Gen Z going the video way, the future <br /> rectruitment
              is going to be through video resumes. It <br /> saves the HR
              people a ton of time in screening profiles.
              <br /> And it makes it more human to present themselves <br />{" "}
              than plain texts for the employees.
              <br />
              With 20+ years on the video production industry, you’re <br /> on
              the right hands.
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-blue-700">Linda Jermy</div>
            <div class="text-gray-500">Commerce Student</div>
            <div class="flex justify-start mt-2">
              <button class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started
              </button>
              <p class="ml-4 inline-flex text-blue-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <span class="mr-2">
                  <i class="far fa-play-circle"></i>
                </span>{" "}
                watch demo
              </p>
            </div>
          </figcaption>
        </div>

        <div class=" lg:w-1/4 md:w-1/2 bg-white flex flex-col flex-end w-25 mx-auto mb-20 mr-20">
          <div>
            <div class="relative w-50 max-w-md">
              {/* <div class="flex space-between h-25 w-50 bg-gray shadow rounded mr-20 mt-20  -my-10 -z-20 ">
                <div class="flex justify-center md:justify-center mt-8">
                  <img
                    class="w-14 h-14  rounded-full border-2 border-indigo-500"
                    src="https://i.ibb.co/Nj0TY0M/Ellipse-2-1.png"
                  />
                </div>
                <div>
                  <h2 class="text-gray-800 text-xl font-semibold">
                    Danny Mambo
                  </h2>
                  <p>Founder of Visume</p>
                  <p class="mt-2 text-gray-600 text-center items-center">
                    “If you can touch someone’s <br /> life by contributing to
                    their <br />
                    success, you’re god.”
                  </p>
                </div>
              </div> */}
              <div class="relative flex justify-last">
                <img
                  class="w-25 rounded-2  h-50   mx-auto items-right"
                  src="https://i.ibb.co/ThfGpjq/Group-18.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default About;
