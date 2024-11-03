import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/appwrite/api";
import { account } from "@/lib/appwrite/config";
import {
  useCreateGoogleUserAccount,
  useGetUserById,
} from "@/lib/react-query/queries";

export const GoogleLogIn = () => {
  const { mutateAsync: createGoogleUserAccount } = useCreateGoogleUserAccount();

  const googleAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      account.createOAuth2Session(
        "google",
        "http://localhost:5173/",
        "http://localhost:5173/sign-up"
      );
    } catch (error) {
      console.log(error);
    }

    try {
      getCurrentUser();
      console.log("account already on database");
    } catch {
      createGoogleUserAccount();
      console.log("creating new account");
    }
  };

  return (
    <Button
      className="text-lg  bg-light-1 p-3 shadow-sm w-3/4 hover:border-2"
      onClick={(e) => googleAuth(e)}
    >
      <img
        src="/assets/icons/google-icon-logo.svg"
        alt="google"
        className="w-7 mr-2"
      />
      Google Sign Up
    </Button>
  );
};
