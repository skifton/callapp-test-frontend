import React from "react";
import clsx from "clsx";
import { NavLink, NavLinkProps } from "react-router-dom";

interface IProps extends NavLinkProps {
  title: string;
  className?: string;
}

const NavigationButton: React.FC<IProps> = ({
  title,
  className,
  ...navLinkProps
}) => {
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
      {...navLinkProps}
    >
      {title}
    </NavLink>
  );
};

export default NavigationButton;
