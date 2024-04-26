import { Outlet, Navigate } from "react-router-dom";
import { baseUrl } from "@/constants";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src={baseUrl + "/assets/images/side-img.svg"}
            alt="logo"
            className=" md:block h-screen w-1/2 object-cover bg-no=repeat sm:hidden"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
