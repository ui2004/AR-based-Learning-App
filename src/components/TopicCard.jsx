import React from "react";

const TopicCard = ({ id, img, topic, qrImg, desc }) => {
  return (
    <div
      className=" flex flex-col gap-2 items-center border-2 border-black rounded-lg"
      key={id}
    >
      <div>
        <img className=" w-full rounded-lg" src={img} alt="img" />
      </div>
      <h1 className=" text-3xl font-bold">{topic}</h1>
      <p className=" text-center px-2">{desc}</p>
      <div>
        <img src={qrImg} alt="qr" />
      </div>
    </div>
  );
};

export default TopicCard;
