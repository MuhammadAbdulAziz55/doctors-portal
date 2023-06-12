import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login, loginWithGoogle } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // send token verification
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  // Login with email and password functionality
  const handleLogin = (data) => {
    setLoginError("");
    login(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success("Your account has been logged in successfully");
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  // Login with google functionality
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        const email = user.email;
        console.log(email);
        // getGoogleLoginToken(email);
        setLoginUserEmail(email);
        toast.success("Your account has been logged in successfully");
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center mt-20 mb-20 ">
      <div className="w-96 p-7 shadow-2xl rounded-lg">
        <h3 className="text-2xl text-center mb-7">Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full mb-2 ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              // onChange={handleEmailBlur}
              name="email"
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
          <div className="form-control w-full flex">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex">
              <input
                type={passwordVisible ? "text" : "password"}
                className="input input-bordered w-full pr-10 "
                {...register("password", {
                  required: "Password  is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 character or longer",
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
            <label className="label">
              <Link to="/login/reset-password">
                <span className="label-text-alt decoration-secondary ml-1 underline decoration-solid  cursor-pointer text-secondary">
                  Forgot Password
                </span>
              </Link>
            </label>
          </div>

          <input
            value="Login"
            className="btn btn-accent w-full mt-8 text-base"
            type="submit"
          />
          <div>
            {loginError && <p className="text-sm text-red-600">{loginError}</p>}
          </div>
        </form>

        <p className="text-xs text-center mt-3">
          New to doctors portal?
          <Link
            className="text-secondary ml-1  decoration-secondary underline decoration-solid"
            to="/signup"
          >
            Create a new account
          </Link>
        </p>

        <div className="divider">OR</div>

        {/* Login with google button */}
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

export default Login;
