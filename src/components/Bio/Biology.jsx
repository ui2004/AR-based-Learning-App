import React from "react";
import TopicCard from "../TopicCard";

const Biology = () => {
  const topicData = [
    {
      id: 1,
      img: "../src/assets/img/kidney.jpg",
      topic: "Kidney",
      qrImg: "../src/assets/img/kidneyQR.jpeg",
      desc: "The kidney is a vital organ responsible for filtering waste products and excess fluids from the blood to form urine.",
    },
    {
      id: 2,
      img: "../src/assets/img/heart.jpg",
      topic: "Heart",
      qrImg: "../src/assets/img/HeartQR.png",
      desc: "The heart is a muscular organ responsible for pumping blood throughout the body , It consists of four chambers two atria and two ventricles",
    },
    {
      id: 3,
      img: "../src/assets/img/DNA.jpg",
      topic: "DNA",
      qrImg: "../src/assets/img/DnaQR.png",
      desc: "DNA is composed of two polynucleotide chains that coil around each other to form a double helix.Each strand of DNA consists of a long chain of nucleotides.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center pb-5">
      <h1 className=" text-center text-4xl font-bold mt-20">Biology</h1>

      <h3 className=" text-center text-lg mt-2 mb-5">
        Our project provides a unique opportunity to visualize complex
        biological concepts with stunning 3D imagery.
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

export default Biology;
