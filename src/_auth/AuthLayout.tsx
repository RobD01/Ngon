import { Outlet, Navigate } from "react-router-dom";
import { baseUrl } from "@/constants";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex flex-col sm:flex-row">
          <section className="flex flex-1 items-center flex-col py-10 px-5">
            <Outlet />
          </section>
          <img
            src={baseUrl + "/assets/images/donuts.webp"}
            alt="logo"
            className=" md:block h-screen object-cover bg-no=repeat sm:w-full"
          />
        </section>
      )}
    </>
  );
};

export default AuthLayout;
