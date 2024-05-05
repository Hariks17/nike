import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white">
      {label}{" "}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icons"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
