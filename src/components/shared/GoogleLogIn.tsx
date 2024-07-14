import { Button } from "@/components/ui/button";
// import { createUserAccount } from "@/lib/appwrite/api";
import { account } from "@/lib/appwrite/config";
import { useState } from "react";

export const GoogleLogIn = () => {
  const [accountDetail, setAccountDetail] = useState({});

  const googleAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    account.get().then((user) => setAccountDetail(user));

    console.log(accountDetail);

    try {
      account.createOAuth2Session(
        "google",
        "http://localhost:5173/",
        "http://localhost:5173/sign-up"
      );
    } catch (error) {
      // const newUser = await createUserAccount(values);
      // if (!newUser) {
      //   console.log("error signing in");
      // }

      // const session = await signInAccount({
      //   email: values.email,
      //   password: values.password,
      // });

      // if (!session) {
      //   return toast({ title: "Sign in failed. Please try again" });
      // }

      // const isLoggedIn = await checkAuthUser();

      // if (isLoggedIn) {
      //   form.reset();
      //   navigate("/");
      // } else {
      //   return toast({ title: "Sign up failed. Please try again" });
      // }
      console.log(error);
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
