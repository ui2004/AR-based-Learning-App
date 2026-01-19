import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex  items-center text-white bg-[url('././assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className=" container space-y-8">
        <div>
          <h1 className=" text-6xl font-bold">Create Interactive</h1>
          <h1 className=" text-5xl font-bold mt-3">VR Experiences</h1>
        </div>

        <p className=" w-2/4">
          Welcome to our cutting-edge Augmented Reality (AR) web application
          dedicated to enhancing the student learning experience. Students can
          explore complex subjects through 3D models.
        </p>

        <button className=" bg-black text-white px-5 py-2 font-medium rounded-md hover:bg-white hover:text-black transition duration-200 ease-linear">
          Check Project
        </button>
      </div>
    </div>
  );
};

export default Hero;
