import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
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
    console.log(booking);
    setTreatment(null);
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
              class="input input-bordered w-full  mb-4 mt-4 "
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
              placeholder="Type your name"
              class="input input-bordered w-full  mb-4"
            />
            <input
              name="email"
              type="email"
              placeholder="Type your  email"
              class="input input-bordered w-full  mb-4"
            />

            <input
              name="phone"
              type="text"
              placeholder="Type your phone"
              class="input input-bordered w-full  mb-4"
            />
            <input type="submit" class="btn btn-accent w-full  mb-4" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
