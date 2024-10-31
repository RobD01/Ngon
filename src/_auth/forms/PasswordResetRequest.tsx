import { Button } from "@/components/ui/button";
import { account } from "@/lib/appwrite/config";
import { useState } from "react";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // @ts-expect-error event form
  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    try {
      await account.createRecovery(email, `https://ngonapp.com/reset-password`);
      setMessage("Password reset link sent to your email.");
    } catch (error) {
      setMessage("Error sending password reset link.");
    }
  };

  return (
    <div className="flex-center flex-col items-center">
      <h2 className="h3-bold md:h2-bold pt-5 sm:pt-5">Reset Password</h2>
      <form
        onSubmit={handlePasswordResetRequest}
        className="flex flex-col gap-5 sm:w-2/3  mt-4"
      >
        <p className="font-thin">
          Please enter the account email. We will send you an email with a link
          to reset the password
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2"
        />
        <Button type="submit" className="shad-button_primary">
          Send Reset Link
        </Button>
      </form>
      {message && <p>{message}</p>}
      <section className="flex flex-col gap-2 sm:w-2/3 m-4">
        <p>
          Note: We apologize that due to code limitations, you need to slightly
          modify the link in the email.
        </p>
        <p>
          You will get a link like this: <br />
          https://ngonapp.com/reset-password?userId=#&secret=#
        </p>
        <p>
          Add a <span className="text-rose-600 font-semibold">/#</span> after{" "}
          <span className="text-rose-600 font-semibold">.com</span>
        </p>
        <p>
          To make the link like this: <br />
          https://ngonapp.com
          <span className="text-rose-600 font-semibold">/#</span>
          /reset-password?userId=#&secret=#
        </p>
        <p>Then that link to go to the reset page</p>
      </section>
    </div>
  );
};

export default PasswordResetRequest;
