import { baseUrl } from "@/constants";
import { useState } from "react";

type BlankSnackProps = {
  item: string;
};

const BlankSnack = (item: BlankSnackProps) => {
  const imageList = [
    "/assets/images/blankSnack/burger.svg",
    "/assets/images/blankSnack/cherry.svg",
    "/assets/images/blankSnack/chicken.svg",
    "/assets/images/blankSnack/coffee.svg",
    "/assets/images/blankSnack/cupcake.svg",
    "/assets/images/blankSnack/icecream.svg",
    "/assets/images/blankSnack/noodle.svg",
    "/assets/images/blankSnack/pizza.svg",
    "/assets/images/blankSnack/waffle.svg",
  ];

  const [imageUrl, setImageUrl] = useState(imageList[0]);

  const changeImage = () => {
    setImageUrl(imageList[Math.floor(Math.random() * imageList.length)]);
  };

  const image = (
    <img
      src={baseUrl + imageUrl}
      alt=""
      className="w-1/4 sm:1/5"
      onClick={changeImage}
    />
  );

  return (
    <>
      <h2>There are no {item.item} here, Here's a snack until then </h2>
      {image}
    </>
  );
};

export default BlankSnack;
