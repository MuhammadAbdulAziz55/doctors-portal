import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="mt-16">
      <p className="text-center text-secondary text-[22px] font-bold lg:mx-0 md:mx-0 mx-6">
        Available Services on {format(selectedDate, "PP")}
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  lg:mx-0 mx-6 lg:my-16 md:my-14 my-12">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
