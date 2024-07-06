import { Button } from "@/components/ui/button";
import { account } from "@/lib/appwrite/config";
import { useState } from "react";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    try {
      await account.createRecovery(
        email,
        `http://localhost:5173/reset-password`
      );
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
        />
        <Button type="submit" className="shad-button_primary">
          Send Reset Link
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordResetRequest;
