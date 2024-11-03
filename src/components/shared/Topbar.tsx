import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";
import { baseUrl } from "@/constants";

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex-between flex-wrap py-1 px-5 ">
        <Link
          to="/"
          className="flex gap-1 items-center text-lg rounded-xl border-b-4  border-rose-300 bg-white px-2 text-rose-400"
        >
          <img
            src={baseUrl + "/assets/images/logo-menu.png"}
            alt="logo"
            width={35}
          />
          <span className="title">ngon</span>
        </Link>

        <div className="flex gap-4 ">
          <Button
            variant="ghost"
            className="shad-button_ghost border-solid "
            onClick={() => signOut()}
          >
            <img src={baseUrl + "/assets/icons/logout.svg"} alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={
                user.imageUrl ||
                baseUrl + "/assets/images/profile-placeholder.svg"
              }
              alt="profile"
              className="h-8 w-8 rounded-full"
            />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
