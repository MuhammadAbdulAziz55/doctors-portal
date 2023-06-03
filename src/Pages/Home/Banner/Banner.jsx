import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";
import { FaRegClock } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { IoMdPin } from "react-icons/io";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <section className=" py-20 ">
      <div className="w-[100%] mx-auto px-4 pt-8 pb-24 flex flex-col-reverse lg:flex-row items-center backgroundImg">
        <div className="w-full lg:w-1/2 lg:pr-8 ">
          <div className="text-black text-center lg:text-left">
            <h2 className="text-3xl font-bold lg:mt-0 lg:mb-0 mt-4 mb-3">
              Your New Smile Starts Here
            </h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0  ">
          <img src={chair} alt="" className="mx-auto lg:ml-auto" />
        </div>
      </div>

      {/* Info card section start */}
      <div className="flex lg:flex-row flex-col gap-5 mt-10">
        {/* left */}
        <div className="flex-1 bg-primary bg-gradient-to-r from-primary to-secondary  p-7 flex flex-col md:flex-row lg:flex-row gap-4 rounded-lg lg:mx-0 md:mx-0 mx-6">
          <div className="flex justify-center ">
            <FaRegClock className="w-20 h-20 text-white " />
          </div>
          <div className="">
            <h5 className="text-[18px] text-white pb-2">Opening Hours</h5>
            <p className="text-[16px] text-white">24 hours</p>
          </div>
        </div>
        {/* center */}
        <div className="flex-1 bg-accent  p-7   flex flex-col md:flex lg:flex-row gap-4 rounded-lg lg:mx-0 md:mx-0 mx-6">
          <div className="flex justify-center ">
            <IoMdPin className="w-20 h-20 text-white" />
          </div>
          <div className="">
            <h5 className="text-[18px] text-white pb-2">Visit our location</h5>
            <p className="text-[16px] text-white">
              Mohammadpur, Dhaka 1007, Bangladesh
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 bg-primary bg-gradient-to-r from-primary to-secondary  p-7   flex flex-col md:flex lg:flex-row gap-4 rounded-lg lg:mx-0 md:mx-0 mx-6">
          <div className="flex justify-center ">
            <TbPhoneCall className="w-20 h-20 text-white  " />
          </div>
          <div className="">
            <h5 className="text-[18px] text-white pb-2">Contact us now</h5>
            <p className="text-[16px] text-white">+00304044040</p>
          </div>
        </div>
      </div>
      {/* Info card section end */}
    </section>
  );
};

export default Banner;
