import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
const UsePasswordToggle = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const toggleIcon = passwordVisible ? (
    <AiFillEyeInvisible onClick={() => setPasswordVisible(!passwordVisible)} />
  ) : (
    <AiFillEye onClick={() => setPasswordVisible(passwordVisible)} />
  );
  const passwordInputType = passwordVisible ? "text" : "password";

  return [passwordInputType, toggleIcon];
};

export default UsePasswordToggle;
