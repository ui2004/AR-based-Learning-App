import React, { useState } from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className=" fixed w-full z-10 bg-secondary text-white bg-black py-4">
      <nav className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <TbDeviceVisionPro size={32} />
          <Link to="/" className=" font-bold text-2xl">
            AR WEB
          </Link>
        </div>

        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/"
            className=" hover:text-violet-300 transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/user"
            className=" hover:text-violet-300 transition duration-200 ease-linear"
          >
            Our Project
          </Link>
        </div>

        <div>
          <button className=" hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-white hover:text-black transition duration-200 ease-linear">
            Sign In
          </button>
        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <Link to="/">Home</Link>
        <Link to="/User">Our Project</Link>

        <div>
          <button className="border-2 border-primary py-1 px-4 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
