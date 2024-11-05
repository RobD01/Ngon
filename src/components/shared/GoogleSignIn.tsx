import { Button } from "@/components/ui/button";
// import { useUserContext } from "@/context/AuthContext";
import { account } from "@/lib/appwrite/config";
import { useNavigate } from "react-router-dom";
import { toast } from "../ui/use-toast";

export const GoogleSignIn = async () => {
  // const { checkAuthUser } = useUserContext();
  const navigate = useNavigate();
  // const isLoggedIn = await checkAuthUser();

  const googleAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      account.createOAuth2Session(
        "google",
        "http://localhost:5173/",
        "http://localhost:5173/sign-up"
      );

      // if (isLoggedIn) {
      //   navigate("/");
      // } else {
      //   return toast({ title: "Sign in failed. Please try again" });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      className="text-lg  bg-light-1 p-3 shadow-sm sm:w-3/4 hover:border-2"
      onClick={(e) => googleAuth(e)}
    >
      <img
        src="/assets/icons/google-icon-logo.svg"
        alt="google"
        className="w-7 mr-2"
      />
      Google Log In
    </Button>
  );
};
