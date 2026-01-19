import React from "react";
import img from "../../../assets/img/mission.jpg";

const Mission = () => {
  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Mission</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
          we are on a mission to redefine the educational experience through the
          transformative power of Augmented Reality (AR).
        </h2>
        <p className=" text-sm lg:text-base">
          Our commitment is to empower learners of all ages by providing an
          immersive and dynamic platform.
        </p>
        <p className=" text-sm lg:text-base">
          We strive to make education engaging, accessible, and tailored to
          individual learning styles. Our mission encompasses not only the
          delivery of high-quality AR content but also the cultivation of a
          global community where
        </p>
      </div>

      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Mission;
