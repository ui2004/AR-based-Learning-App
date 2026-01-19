import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Vision from "../components/Home/approch/Vision";
import Mission from "../components/Home/approch/Mission";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Mission />
    </>
  );
};

export default Home;
