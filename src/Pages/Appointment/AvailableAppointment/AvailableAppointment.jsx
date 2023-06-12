import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  // const { data: appointmentOptions = [] } = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/appointmentOptions").then((res) =>
  //       res.json()
  //     ),
  // });

  // do same thing  with async await

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
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
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
