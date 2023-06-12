import React, { useContext, useState } from "react";
import firstKey from "../../assets/images/first-key.png";
import secondKey from "../../assets/images/second-key.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [resetError, setResetError] = useState("");
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    console.log(email, "from handle blur");
    setEmail(email);
  };

  // Password reset functionality
  const handleResetPassword = () => {
    setResetError("");
    console.log(email);
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    resetPassword(email)
      .then(() =>
        toast.success("Password reset email sent. Please check your email")
      )
      .catch((err) => {
        setResetError(err.message);
      });
  };
  return (
    <div className="flex items-center justify-center lg:m-28 md:m-24 m-8">
      <div className=" lg:w-96 md:w-96 w-80  p-7 shadow-2xl rounded-lg">
        <h2 className="lg:text-2xl md:text-2xl text-xl text-blue-600 mb-3">
          Forgot Password?
        </h2>
        <p className="lg:text-[18px] md:text-[18px] text-sm  mb-4">
          Enter your email to reset password
        </p>
        <input
          onBlur={handleEmailBlur}
          name="email"
          type="email"
          className="input input-bordered focus:outline-none  w-full mb-5 lg:text-base md:text-sm text-xs "
          placeholder="Email address"
          required
        />
        <button
          onClick={handleResetPassword}
          className="btn btn-secondary w-full text-white lg:text-2xl md:text-2xl text-xl mb-3"
        >
          Next
        </button>
        {resetError && (
          <span className="text-red-600 text-center ">{resetError}</span>
        )}
        <p className="lg:text-sm md:text-sm text-xs text-center">
          Remember your password?{" "}
          <Link
            to="/login"
            className="ml-1 text-teal-400 underline decoration-solid decoration-teal-500"
          >
            Try to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
