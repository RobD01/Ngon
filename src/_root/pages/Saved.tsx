import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { baseUrl } from "@/constants";
import { useGetSavedPosts } from "@/lib/react-query/queries";
import { useState } from "react";

const Saved = () => {
  // const { data: currentUser } = useGetCurrentUser();
  const { data: savedList, isPending } = useGetSavedPosts();

  const savedPost: Array<object> = [];
  !isPending
    ? savedList?.documents.map((item) => savedPost.push(item.post))
    : null;

  const imageList = [
    "/assets/images/cupcake.svg",
    "/assets/images/pizza.svg",
    "/assets/images/coffee.svg",
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

  console.log(savedList);

  return (
    <div className="saved-container">
      <h2 className="h3-bold md:h2-bold w-full"> Saved Posts</h2>
      {isPending ? (
        <>
          <Loader /> Loading ...
          {console.log("loading")}
        </>
      ) : savedPost.length > 0 ? (
        // @ts-expect-error Model.document[]
        <GridPostList key={savedPost?.$id} posts={savedPost} />
      ) : (
        <>
          {" "}
          <h2>No saved post yet.... But here's a snack until then!</h2>
          {image}
        </>
      )}
    </div>
  );
};

export default Saved;
