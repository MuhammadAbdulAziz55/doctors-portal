import React from "react";
import commentIcon from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "Dhaka",
      name: "Muhammad",
    },
    {
      id: 1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "Dhaka",
      name: "Muhammad",
    },
    {
      id: 1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "Dhaka",
      name: "Muhammad",
    },
  ];
  return (
    <section className="mb-16">
      <div className="flex justify-between ">
        <div className="lg:mx-0 md:mx-0 mx-6">
          <h3 className="lg:text-xl md:text-xl text-[18px]  font-bold text-secondary">
            Testimonial
          </h3>
          <h1 className="lg:text-3xl md:text-3xl text-[26px] font-normal ">
            What Our Patient Says
          </h1>
        </div>
        <div>
          <img alt="" src={commentIcon} className="lg:w-48  md:w-40  w-24  " />
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-10 px-10 lg:py-16 py-10
      "
      >
        {reviews.map((info) => (
          <TestimonialCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
