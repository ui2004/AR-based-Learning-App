import React from "react";
import { Link } from "react-router-dom";

const SubjectCard = ({ id, img, topic, desc, route }) => {
  return (
    <div
      className="space-y-2 pb-2 text-center bg-gradient-to-tr from-violet-500 to-orange-300 text-white rounded-lg"
      key={id}
    >
      <div>
        <img className=" w-52 mx-auto" src={img} alt="img" />
      </div>

      <h2 className=" text-2xl font-bold">{topic}</h2>
      <h3>{desc}</h3>
      <Link to={route}>
        <button className=" bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black transition duration-200 ease-linear">
          Show Topics
        </button>
      </Link>
    </div>
  );
};

export default SubjectCard;
