import React from "react";
import TopicCard from "../TopicCard";

const Maths = () => {
  const topicData = [
    {
      id: 1,
      img: "../src/assets/img/kidney.jpg",
      topic: "Kidney",
      qrImg: "../src/assets/img/kidneyQR.jpeg",
      desc: "The kidney is a vital organ responsible for filtering waste products and excess fluids from the blood to form urine.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center pb-5">
      <h1 className=" text-center text-4xl font-bold mt-20">Mathematics</h1>

      <h3 className=" text-center text-lg mt-2 mb-5">
        Our project offers an innovative approach to visualize abstract
        mathematical concepts using dynamic 3D models.
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

export default Maths;
