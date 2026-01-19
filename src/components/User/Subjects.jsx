import React from "react";
import SubjectCard from "./SubjectCard";

const Subjects = () => {
  const subjectData = [
    {
      id: 1,
      img: "src/assets/img/dna.png",
      topic: "Biology",
      desc: "Study of Flora and Fauna",
      route: "/user/bio",
    },
    {
      id: 2,
      img: "src/assets/img/physic.png",
      topic: "Physics",
      desc: "Action and Reaction",
      route: "/user/phy",
    },
    {
      id: 3,
      img: "src/assets/img/chem.png",
      topic: "Chemistry",
      desc: "Chemistry full of reactions",
      route: "/user/chem",
    },
    // {
    //   id: 4,
    //   img: "src/assets/img/math.png",
    //   topic: "Mathematics",
    //   desc: "Calculations of maths",
    //   route: "/user/math",
    // },
  ];
  return (
    <div className=" min-h-screen flex flex-col justify-center">
      <h1 className=" text-center text-4xl font-bold mt-8 ">Subjects</h1>

      <h3 className=" text-center text-lg mt-2 mb-5">
        Our innovative approach redefines the way students engage with subjects.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-32">
        {subjectData.map((item) => (
          <SubjectCard
            key={item.id}
            id={item.id}
            img={item.img}
            topic={item.topic}
            desc={item.desc}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
