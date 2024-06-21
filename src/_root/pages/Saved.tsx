import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser, useGetSavedPosts } from "@/lib/react-query/queries";

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
      {savedPost.length == 0 || isPending ? (
        <>
          <Loader /> Loading ...
        </>
      ) : (
        // @ts-expect-error Model.document[]
        <GridPostList posts={savedPost} />
      )}
    </div>
  );
};

export default Saved;
