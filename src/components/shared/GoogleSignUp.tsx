import { Button } from "@/components/ui/button";
import { account } from "@/lib/appwrite/config";

export const GoogleSignUp = () => {
  const googleAuth = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      account.createOAuth2Session(
        "google",
        "https://ngonapp.com/",
        "https://ngonapp.com/#/sign-up"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
      <p className="text-sm  text-rose-700">
        First time creating the account with Google: you'll need to log in a
        second time
      </p>
    </>
  );
};
