import React from "react";

const TestimonialCard = ({ info }) => {
  const { img, comment, location, name } = info;
  return (
    <div className="p-6 border-[1px] border-gray-100 shadow-lg rounded-2xl ">
      <p className="text-base text-normal ">{comment}</p>
      <div className="flex gap-4 mt-7">
        <div className="border-[3px] border-secondary rounded-full ">
          <img src={img} className="w-[75px] h-[75px] p-[3px] " alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-base text-normal ">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
