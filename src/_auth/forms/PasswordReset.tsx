import { Button } from "@/components/ui/button";
import { account } from "@/lib/appwrite/config";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const query = useQuery();
  const userId = query.get("userId");
  const secret = query.get("secret");
  const navigate = useNavigate();

  // @ts-expect-error event form
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      // @ts-expect-error user can be null
      await account.updateRecovery(userId, secret, password, confirmPassword);
      setMessage("Password reset successful.");
      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);
    } catch (error) {
      setMessage("Error resetting password.");
    }
  };

  return (
    <section className="flex flex-col items-center w-full p-2 sm:p-5 gap-6 text-lg md:text-xl ">
      <img
        src={"/assets/images/logo-main.png"}
        alt="logo"
        className="w-1/4 md:w-1/6"
      />

      <div className="sm:w-1/2 md:w-1/3">
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-5">Set New Password</h2>
        <form
          onSubmit={handlePasswordReset}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <p className="">
            Please enter the new password (and confirm). We will redirect you to
            the Sign In page
          </p>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="p-2"
          />
          <Button type="submit" className="shad-button_primary">
            Reset Password
          </Button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </section>
  );
};

export default PasswordReset;
