import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center mt-20 mb-20 ">
      <div className="w-96 p-7 shadow-2xl rounded-lg">
        <h3 className="text-2xl text-center mb-7">Sign up</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
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
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {
                required: "Password  is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 character or longer",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message:
                    "Password must be contains at least one uppercase letter, one lowercase letter, one digit , special characters ",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-400" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text-alt">Forgot Password</span>
            </label>
          </div>

          <input
            value="Sign up"
            className="btn btn-accent w-full mt-8 text-base"
            type="submit"
          />
        </form>
        <p className="text-xs text-center mt-3">
          Already have an account?
          <Link className="text-secondary ml-1" to="/signup">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full text-base">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
