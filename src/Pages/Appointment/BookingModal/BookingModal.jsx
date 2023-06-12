import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { user } = useContext(AuthContext);

  const { treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.acknowledged) {
          toast.success("Booking confirmed");
          setTreatment(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full  mb-4 mt-4 "
            />
            <select
              name="slot"
              className="select select-bordered w-full mb-4  "
            >
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              value={user?.displayName}
              disabled
              placeholder="Type your name"
              className="input input-bordered w-full  mb-4"
            />
            <input
              name="email"
              type="email"
              value={user?.email}
              disabled
              placeholder="Type your  email"
              className="input input-bordered w-full  mb-4"
            />

            <input
              name="phone"
              type="text"
              placeholder="Type your phone"
              className="input input-bordered w-full  mb-4"
            />
            <input type="submit" className="btn btn-accent w-full  mb-4" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
