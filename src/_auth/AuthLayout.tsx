import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { baseUrl, landingPageImage, sponsor } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import GridImageList from "@/components/shared/GridImageList";
import SponsorList from "@/components/shared/SponsorList";

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
        <section className="grid w-full p-2 sm:p-5 gap-6 text-lg md:text-xl ">
          {/* Title */}
          <section className="grid grid-cols-1">
            <div className="flex flex-col items-center gap-5">
              <img
                src={baseUrl + "/assets/images/logo-main.png"}
                alt="logo"
                className="w-1/4 md:w-1/6"
              />
              <h1 className="text-2xl ">
                Newest community connecting all Foodies, restaurants, and cafes
              </h1>
              <h1>
                Currently available on web browser only. Future releases will
                include mobile apps{" "}
              </h1>
              {/* Join button */}
              <div className="flex flex-row gap-10">
                <Button
                  className=" bg-rose-400  text-light-1 p-3  md:p-6 md:text-xl"
                  onClick={visibleSignUp}
                >
                  {isVisible ? "Close Menu" : "Register"}
                </Button>
                <Button
                  className={`bg-rose-400  text-light-1 p-3  md:p-6 md:text-xl ${
                    isVisible && "hidden"
                  } `}
                  onClick={visibleSignIn}
                >
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
                // @ts-expect-error object type
                <GridImageList imageList={landingPageImage} />
              }
            </div>
          </section>

          {/* screenshot */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
          <section className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="title">
                In partnership with our community sponsors
              </h1>
              {
                // @ts-expect-error object type
                <SponsorList list={sponsor} />
              }
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="title">Become a sponsor</h1>
              <p>
                This is a great way to represent your brand, and put your logo
                and business in front many food lovers and restaurants.
                Businesses include (but are not limited to):
              </p>
              <ul className="px-7">
                <li>Restaurant, cafe</li>
                <li>Distributor</li>
                <li>Payment service, business solutions, marketing</li>
              </ul>
              <p>Sponsorship benefits include:</p>
              <ul className="px-7">
                <li>Logo placement on landing page and sponsors page</li>
                <li>Link to your company website</li>
                <li>Company description, max 50 words</li>
              </ul>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default AuthLayout;
