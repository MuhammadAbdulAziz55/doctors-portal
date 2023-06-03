import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";
import ServiceCard from "./ServiceCard";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Service = () => {
  const serviceCardInfo = [
    {
      id: 1,
      name: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div>
      <h6 className="text-center text-xl text-secondary mb-1">OUR SERVICE</h6>
      <h3 className="text-center text-3xl mb-16">Services We Provide</h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  lg:mx-0 mx-6">
        {serviceCardInfo.map((serviceInfo) => (
          <ServiceCard key={serviceInfo.id} serviceInfo={serviceInfo} />
        ))}
      </div>

      <div className="w-[100%] mx-auto   lg:mt-32 mt-9 mb-20 lg:mb-52 flex flex-col lg:flex-row items-center lg:gap-10 gap-8">
        <div className="w-full lg:pl-32 px-14 ">
          <img
            src={treatment}
            alt=""
            className="lg:w-[458px] lg:h-[476px] w-[326px] h-[406px] bg-transparent"
          />
        </div>
        <div className="w-full  lg:pr-32 px-6 ">
          <div className="text-black text-center lg:text-left">
            <h2 className="lg:text-4xl md:text-4xl text-3xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h2>
            <p className="py-6 font-normal text-base leading-5 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
