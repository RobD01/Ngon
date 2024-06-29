import React from "react";

const temp = () => {
  return (
    <>
      <section className="flex flex-col items-center p-2 gap-5">
        <img
          src={baseUrl + "/assets/images/logo-main.png"}
          alt="logo"
          className="w-1/4 md:w-1/6"
        />
        <h1 className="text-3xl ">
          The online community connecting all Foodies, restaurants, and cafes
        </h1>
        <h1>
          Currently available on web browser only. Future releases will include
          mobile apps{" "}
        </h1>
      </section>

      <section className="flex flex-1 items-center flex-col py-2 px-5">
        <Button className="shad-button_primary" onClick={visible}>
          Join{" "}
        </Button>
        <div
          className={
            isVisible
              ? "transform scale-y-0 transition duration-500 ease-in-out block"
              : "transform scale-y-100 transition duration-500 ease-in-out hidden"
          }
        >
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default temp;
