import React from "react";
import img from "../../../assets/img/vision.jpg";

const Vision = () => {
  return (
    <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Vision</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
          Envisioning a Dynamic Learning Future, Shaping Tomorrow's Minds
          Through AR Innovation
        </h2>
        <p className=" text-sm lg:text-base">
          our vision is to revolutionize the landscape of education by
          seamlessly integrating Augmented Reality (AR) into the learning
          journey.
        </p>
        <p className=" text-sm lg:text-base">
          We aspire to cultivate a dynamic and immersive educational experience
          that transcends traditional boundaries. With a commitment to
          innovation, we envision a future where students explore, understand,
          and embrace knowledge in ways never before possible.
        </p>
      </div>
    </div>
  );
};

export default Vision;
