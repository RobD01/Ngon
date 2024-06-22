import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { baseUrl } from "@/constants";
import { useGetSavedPosts } from "@/lib/react-query/queries";

const Saved = () => {
  // const { data: currentUser } = useGetCurrentUser();
  const { data: savedList, isPending } = useGetSavedPosts();

  const savedPost: Array<object> = [];
  !isPending
    ? savedList?.documents.map((item) => savedPost.push(item.post))
    : null;

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
          <h2>No saved post yet.... But here's a cupcake until then!</h2>
          <img
            src={baseUrl + "/assets/images/cupcake.svg"}
            alt=""
            className="w-1/4 sm:1/5"
          />
        </>
      )}
    </div>
  );
};

export default Saved;
