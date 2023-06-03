import React from "react";

const AppointmentOptions = ({ option, setTreatment }) => {
  const { treatmentName, slots } = option;
  return (
    <div className="p-7 flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-100 shadow-xl lg:mb-9 md:mb-9 mb-6">
      <h2 className="text-xl font-semibold text-secondary">{treatmentName}</h2>
      <p className="text-sm font-normal pt-3">
        {slots.length > 0 ? slots[0] : "Try Another Day"}
      </p>
      <p className=" text-sm pt-3 pb-3 font-normal">
        {slots.length} {slots.length > 1 ? "spaces" : "space"} available
      </p>

      <label
        disabled={slots.length === 0}
        htmlFor="booking-modal"
        onClick={() => setTreatment(option)}
        className="btn text-sm bg-primary bg-gradient-to-r from-primary to-secondary px-5 py-3 text-white font-bold rounded-md border-none"
      >
        BOOK APPOINTMENT
      </label>
    </div>
  );
};

export default AppointmentOptions;
