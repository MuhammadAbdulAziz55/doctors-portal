import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signupError, setSignupError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const { createUser, updateUserProfile, loginWithGoogle } =
    useContext(AuthContext);

  const handleLogin = (data) => {
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Your account has been created successfully");
        const userInfo = {
          displayName: data.name,
        };

        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setSignupError(err.message);
      });
  };

  // Sign up with google functionality
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        const email = user.email;
        const displayName = user.displayName;
        console.log(email, displayName);
        saveUser(displayName, email);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // user data save to the database
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "save-user");
        setCreatedUserEmail(email);
      });
  };

  // password show and hide functionality
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
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
            <div className="flex">
              <input
                type={passwordVisible ? "text" : "password"}
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
              <button
                onClick={togglePasswordVisibility}
                className="ml-[-25px] text-[18px]"
                // className="absolute right-32 top-1/2 -translate-y-1/2 cursor-pointer sm:right-8"
              >
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            value="Sign up"
            className="btn btn-accent w-full mt-8 text-base"
            type="submit"
          />
          {signupError && <p className="text-red-600">{signupError}</p>}
        </form>
        <p className="text-xs text-center mt-3">
          Already have an account?
          <Link
            className="text-secondary ml-1 decoration-secondary underline decoration-solid"
            to="/login"
          >
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full text-base"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
