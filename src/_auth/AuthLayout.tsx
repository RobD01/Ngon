import { Outlet, Navigate } from "react-router-dom";
import { baseUrl } from "@/constants";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex flex-col sm:flex-col">
          <section className="flex flex-col items-center p-2">
            <img
              src={baseUrl + "/assets/images/logo2.png"}
              alt="logo"
              className="w-1/4"
            />
            <h1 className="text-4xl">
              The best way to share your food adventures
            </h1>
            <h1>
              Currently available on web browser only. Future releases will
              include mobile apps{" "}
            </h1>
          </section>
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
