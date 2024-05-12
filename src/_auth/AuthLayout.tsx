import { Outlet, Navigate } from "react-router-dom";
import { baseUrl } from "@/constants";
import { useUserContext } from "@/context/AuthContext";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex flex-col sm:flex-col">
          <section className="flex flex-col items-center p-2 text-center">
            <img
              src={baseUrl + "/assets/images/logo2.png"}
              alt="logo"
              className="w-1/4"
            />
            <h1 className="text-4xl ">
              The online community connecting all Foodies, restaurants, and
              cafes
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
            src={baseUrl + "/assets/images/mi-quang.jpg"}
            alt="logo"
            className=" md:w-1/2 h-screen object-cover bg-no=repeat sm:w-full"
          />
        </section>
      )}
    </>
  );
};

export default AuthLayout;
