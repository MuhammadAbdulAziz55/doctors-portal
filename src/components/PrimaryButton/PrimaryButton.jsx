import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-primary bg-gradient-to-r from-primary to-secondary px-6 py-4 text-white font-bold">
      {children}
    </button>
  );
};

export default PrimaryButton;
