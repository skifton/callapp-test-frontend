import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface IProps {
  to: string;
  title: string;
  className?: string;
}

const NavigationButton: React.FC<IProps> = ({ to, title, className }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "px-10 py-7 border-b-4 hover:bg-gray-200 hover:text-gray-600",
          {
            "border-blue-400": isActive,
          },
          className
        )
      }
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default NavigationButton;
