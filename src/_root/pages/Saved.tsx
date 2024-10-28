import BlankSnack from "@/components/shared/BlankSnack";
import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/AuthContext";
import { useGetSavedPosts } from "@/lib/react-query/queries";

const Saved = () => {
  // const { data: currentUser } = useGetCurrentUser();
  const { data: savedList, isPending } = useGetSavedPosts();

  const { user: currentUser } = useUserContext();

  const savedPost: Array<object> = [];
  !isPending
    ? savedList?.documents.map((item) => savedPost.push(item.post))
    : null;

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
          {/* {image} */}
          <BlankSnack item="saved posts" />
        </>
      )}
    </div>
  );
};

export default Saved;
