import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Service />
      <MakeAppointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
