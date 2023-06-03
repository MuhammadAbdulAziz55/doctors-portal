import React from "react";

const ServiceCard = ({ serviceInfo }) => {
  const { name, desc, img } = serviceInfo;
  return (
    <div className="p-7 flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 shadow-xl ">
      <img src={img} alt="" className="mb-8 w-[100px] h-[115px]" />
      <h4 className="mb-2 text-xl -600">{name}</h4>
      <p className="text-center text-base">{desc}</p>
    </div>
  );
};
export default ServiceCard;
