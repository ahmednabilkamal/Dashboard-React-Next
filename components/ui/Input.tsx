import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${className}`}
      {...props}
    />
  );
};

export default Input;
