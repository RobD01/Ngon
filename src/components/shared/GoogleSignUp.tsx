import { Button } from "@/components/ui/button";
import { account } from "@/lib/appwrite/config";
import { useCreateGoogleUserAccount } from "@/lib/react-query/queries";

export const GoogleSignUp = () => {
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

    createGoogleUserAccount();
    console.log("creating new account");
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
      Use Google Account
    </Button>
  );
};
