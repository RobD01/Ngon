import { Routes, Route } from "react-router-dom";
import "./globals.css";

import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/pages/RootLayout";
import { Toaster } from "./components/ui/toaster";
import PasswordResetRequest from "./_auth/forms/PasswordResetRequest";
import PasswordReset from "./_auth/forms/PasswordReset";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public */}
        <Route path="/reset-password" element={<PasswordReset />} />

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route
            path="/reset-password-request"
            element={<PasswordResetRequest />}
          />
        </Route>
        {/* private */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
