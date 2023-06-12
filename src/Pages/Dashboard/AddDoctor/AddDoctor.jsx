import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";

const AddDoctor = () => {
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddDoctor = (data) => {
    // console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="ml-3 w-96 p-7">
      <h2 className="text-2xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full mb-2 ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-400" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full mb-2 ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full "
            {...register("email", { required: "Email Address is required" })}
          />
          {errors.email && (
            <p className="text-red-400" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        {/* doctors category selection section */}
        <div className="form-control w-full mb-2 ">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Please select a specialty
            </option>
            {specialties?.map((specialty) => (
              <option value={specialty.treatmentName} key={specialty._id}>
                {specialty.treatmentName}
              </option>
            ))}
          </select>
          {errors.email && (
            <p className="text-red-400" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>

        {/* upload photo section */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is Required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        {/* Add doctor button */}
        <input
          value="Add Doctor"
          className="btn btn-accent w-full mt-8 text-base"
          type="submit"
        />
        {/* {signupError && <p className="text-red-600">{signupError}</p>} */}
      </form>
    </div>
  );
};

export default AddDoctor;
