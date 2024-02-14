import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, variant = "bg-sky-700", to } = props; // Mengakses props.to
  return (
    <Link to={to}>
      <button
        className={`h-10 px-8 font-medium rounded-md ${variant} text-white border border-transparent transition duration-300 hover:bg-white hover:border-sky-700 hover:text-sky-700`}
        type="submit"
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
