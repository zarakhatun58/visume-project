import React from "react";
import Navbar from "./../Header/Navbar";
import Contact from "./../Contact/Contact";
import Footer from "./../Footer/Footer";
import Pricing from "../Pricing/Pricing.js";
import Social from "./../Social/Social";

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <Social></Social>
      <Contact></Contact>
    </div>
  );
};

export default Home;
