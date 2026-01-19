import React from "react";
import TopicCard from "../TopicCard";

const Physics = () => {
  const topicData = [
    {
      id: 1,
      img: "../src/assets/img/Magnetics.jpg",
      topic: "Magnetic Fields",
      qrImg: "../src/assets/img/MagneticQR.png",
      desc: "The magnetic field is a captivating vector field that envelops magnets, electric currents, or changing electric fields.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center pb-5">
      <h1 className=" text-center text-4xl font-bold mt-20">Physics</h1>

      <h3 className=" text-center text-lg mt-2 mb-5">
        Our project offers an innovative platform to visualize intricate
        physical phenomena through immersive 3D imagery.
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

export default Physics;
