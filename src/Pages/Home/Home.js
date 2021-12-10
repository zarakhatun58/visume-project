import React from "react";
import About from "../About/About.js";
import Pricing from "../Pricing/Pricing.js";
import Contact from "./../Contact/Contact";
import Social from "./../Social/Social";

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <About></About>
      <Pricing></Pricing>
      <Social></Social>
      <Contact></Contact>
    </div>
  );
};

export default Home;
