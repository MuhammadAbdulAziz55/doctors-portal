import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import backgroundImg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="mb-20"
      style={{
        background: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero ">
        <div className="flex items-center  justify-center gap-3 flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 lg:w-[50%]   hidden lg:block  rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:text-left text-center">
            <h1 className="text-xl font-bold text-secondary ">Appointment</h1>
            <h1 className="text-3xl font-bold text-white mt-5 ">
              Make an appointment Today
            </h1>
            <p className="text-base font-normal text-white mt-5  mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton className="">Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
