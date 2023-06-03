import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
  return (
    <header className="backgroundImg">
      <div className="w-[100%] lg:px-32 px-0  pt-20 lg:pb-28 md:pb-24 pb-16 flex flex-col-reverse lg:flex-row items-center ">
        <div className=" flex-1 ">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
        <div className=" flex-1 lg:w-full w-[80%] ">
          <img src={chair} alt="" className=" " />
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
