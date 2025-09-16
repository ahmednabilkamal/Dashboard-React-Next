import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
