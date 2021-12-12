import React from "react";
import About from "../About/About.js";
import Glory from "../Glory/Glory.js";
import Steps from "../Glory/Steps.js";
import Pricing from "../Pricing/Pricing.js";
import Contact from "./../Contact/Contact";
import Social from "./../Social/Social";

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <Steps></Steps>
      <Glory></Glory>
      <About></About>
      <Pricing></Pricing>
      <Social></Social>
      <Contact></Contact>
    </div>
  );
};

export default Home;
