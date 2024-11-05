import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useUserContext } from "@/context/AuthContext";
import { getCurrentUser } from "@/lib/appwrite/api";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import { Models } from "appwrite";

const checkAuthUser = async () => {
  try {
    const currentAccount = await getCurrentUser();

    console.log(currentAccount);
  } catch (error) {
    console.error(error);
    return false;
  }
};

const Home = () => {
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  if (isErrorPosts) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full px-5">Feed</h2>
          {isPostLoading && !posts ? (
            <>
              <div className="invert-black">
                <Loader />
              </div>
              <span>Loading...</span>
            </>
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.$id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
