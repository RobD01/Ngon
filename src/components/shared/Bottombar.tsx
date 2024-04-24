import { bottombarLinks } from "@/constants";
import { INavLink } from "@/types";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname == link.route;

        return (
          <Link
            to={link.route}
            className={`${
              isActive && "bottombar-link-active rounded-[10p]"
            } flex-center flex-col gap-1 p-2 transition bottombar-link`}
            key={link.label}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              width={16}
              height={16}
              className={` ${isActive && ""}`}
            />
            <p className="tiny-medium">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
