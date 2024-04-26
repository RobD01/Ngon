import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
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
      <div className="flex-between flex-wrap py-4 px-5 ">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src={baseUrl + "/assets/images/logo2.png"}
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4 ">
          <Button
            variant="ghost"
            className="shad-button_ghost border-solid border-2 border-white p-2 rounded-lg"
            onClick={() => signOut()}
          >
            <img src={baseUrl + "/assets/icons/logout.svg"} alt="logout" /> Log
            out
          </Button>
          <Link
            to={`/profile/${user.id}`}
            className="flex-center gap-3 border-solid border-2 border-white p-2 rounded-lg"
          >
            <img
              src={user.imageUrl || "/assets/images/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />{" "}
            {user.name}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
