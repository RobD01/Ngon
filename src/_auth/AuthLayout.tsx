import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { baseUrl, landingPageImage } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import GridImageList from "@/components/shared/GridImageList";

const AuthLayout = () => {
  const isAuthenticated = useUserContext().isAuthenticated;
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const visibleSignIn = () => {
    setIsVisible(!isVisible);
    navigate("/sign-in");
  };

  const visibleSignUp = () => {
    setIsVisible(!isVisible);
    navigate("/sign-up");
  };

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="grid w-full p-2 sm:p-5 gap-6">
          {/* Title */}
          <section className="grid grid-cols-1">
            <div className="flex flex-col items-center gap-5">
              <img
                src={baseUrl + "/assets/images/logo-main.png"}
                alt="logo"
                className="w-1/4 md:w-1/6"
              />
              <h1 className="text-3xl ">
                Newest community connecting all Foodies, restaurants, and cafes
              </h1>
              <h1>
                Currently available on web browser only. Future releases will
                include mobile apps{" "}
              </h1>
              {/* Join button */}
              <div className="flex flex-row gap-10">
                <Button className="shad-button_primary" onClick={visibleSignUp}>
                  {isVisible ? "Close Menu" : "Join"}
                </Button>
                <Button className="shad-button_primary" onClick={visibleSignIn}>
                  {isVisible ? "Close Menu" : "Sign In"}
                </Button>
              </div>

              <div
                className={
                  isVisible
                    ? "transform scale-y-100 transition duration-500 ease-in-out z-10 block"
                    : "transform scale-y-0 transition duration-500 ease-in-out z-10 hidden"
                }
              >
                <Outlet />
              </div>
            </div>

            <div className=" p-5">
              {
                // @ts-expect-error Model.document[]
                <GridImageList imageList={landingPageImage} />
              }
            </div>
          </section>

          {/* value */}
          <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-2 flex-wrap items-center">
              <img
                src="/assets/images/screenshot - mobile.png"
                alt="screenshot - mobile"
                className="w-1/2"
              />
            </div>
            <div className="">
              <img
                src="/assets/images/screenshot - desktop.png"
                alt="screenshot - desktop"
                className="rounded-lg"
              />
            </div>
          </section>

          {/* sponsor */}
          <section className="grid grid-cols-1 md:grid-cols-2">
            <div className=" "></div>
            <div className=""></div>
          </section>
        </section>
      )}
    </>
  );
};

export default AuthLayout;
