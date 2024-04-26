import { baseUrl } from "@/constants";

const Loader = () => {
  return (
    <div className="flex-center w-full">
      <img
        src={baseUrl + "/assets/icons/loader.svg"}
        alt="loader"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Loader;
