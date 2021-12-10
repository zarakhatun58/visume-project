import React from "react";

const About = () => {
  return (
    <div>
      <div class="text-left ml-20 mb-8"></div>
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0  mr-20">
        <div class="pt-6 md:p-8 text-center items-center md:text-left space-y-4">
          <p class="text-green-300 font-bold">We’re on a mission</p>
          <h3 class="text-blue-700 font-bold ">About Visume</h3>
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
              With 20+ years on the video production industry, you’re on the
              right hands.
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-blue-700">Linda Jermy</div>
            <div class="text-gray-500">Commerce Student</div>
          </figcaption>
        </div>
        <img
          class="w-50 rounded-2  h-32 pt-8 md:w-48 md:h-auto  mx-auto"
          src="https://i.ibb.co/ThfGpjq/Group-18.png"
          alt=""
          width="384"
          height="512"
        />
      </figure>
    </div>
  );
};

export default About;
