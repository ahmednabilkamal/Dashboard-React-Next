import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <select
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-black ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
