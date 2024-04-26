import { useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { baseUrl } from "@/constants";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-4">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src={baseUrl + "/assets/images/logo2.png"}
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img
            src={user.imageUrl || "/assets/images/profile-placeholder.svg"}
            alt="profile"
            className="size-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-1">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname == link.route;

            return (
              <li
                className={`leftsidebar-link group ${
                  isActive && "leftsidebar-link-active"
                }`}
                key={link.label}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={` ${isActive && ""}`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* logout */}
        <Button
          variant="ghost"
          className=" leftsidebar-link flex flex-row flex-start items-center"
          onClick={() => signOut()}
        >
          <img src={baseUrl + "/assets/icons/logout.svg"} alt="logout" />
          <p className="small-medium lg:base-medium ml-5">Logout</p>
        </Button>
      </div>
    </nav>
  );
};

export default LeftSidebar;
