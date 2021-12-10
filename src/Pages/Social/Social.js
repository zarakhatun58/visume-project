import React from "react";

const Social = () => {
  return (
    <div>
      <div class="text-left ml-20 mb-8">
        <p class="text-green-300 font-bold">Social</p>
        <h3 class="text-blue-700 font-bold ">What do Your Customer say?</h3>
      </div>
      <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0  mr-20">
        <img
          class="w-32 rounded-2 bg-green-300 h-32 pt-8 md:w-48 md:h-auto  mx-auto"
          src="https://i.ibb.co/x8r8MBG/ma3.png"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center items-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-semibold">
              ““With the traditional resumes I used to apply for jobs and <br />{" "}
              would get only a few calls. But after creating a video <br />{" "}
              resume, I’ve got 9/10 calls. And I love the simplicity of the{" "}
              <br />
              video creation process being a non techie.””
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-blue-700">Linda Jermy</div>
            <div class="text-gray-500">Commerce Student</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Social;
