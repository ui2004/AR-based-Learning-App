import React from "react";
import TopicCard from "../TopicCard";

const Chemistry = () => {
  const topicData = [
    {
      id: 1,
      img: "../src/assets/img/Benzene.jpg",
      topic: "Benzene",
      qrImg: "../src/assets/img/BenzeneQR.png",
      desc: "The benzene molecule consists of six carbon atoms arranged in a planar hexagonal ring. Each carbon atom is bonded to one hydrogen atom.",
    },
    {
      id: 2,
      img: "../src/assets/img/Fcc.jpg",
      topic: "FCC",
      qrImg: "../src/assets/img/FccQR.png",
      desc: "FCC stands for Face-Centered Cubic, which is a type of crystal structure.It is one of the most common arrangements for metallic crystals.",
    },
    {
      id: 3,
      img: "../src/assets/img/BCC.png",
      topic: "BCC",
      qrImg: "../src/assets/img/BCCQR.png",
      desc: "A BCC unit cell has atoms at each corner of the cube and an atom at the centre of the structure.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center pb-5">
      <h1 className=" text-center text-4xl font-bold mt-20">Chemistry</h1>

      <h3 className=" text-center text-lg mt-2 mb-5">
        Our project presents a unique avenue to explore chemical structures and
        reactions through captivating 3D visualization.
      </h3>

      <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16">
        {topicData.map((item) => (
          <TopicCard
            key={item.id}
            id={item.id}
            img={item.img}
            topic={item.topic}
            qrImg={item.qrImg}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Chemistry;
