import BlankSnack from "@/components/shared/BlankSnack";
import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { baseUrl } from "@/constants";
import { useGetUserById } from "@/lib/react-query/queries";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { data: user, isPending } = useGetUserById(id || "");
  // const { user: currentUser } = useUserContext();
  // const { data: post, isLoading } = useGetUserPosts(id);

  const post = user?.posts;
  console.log(post);
  // console.log(currentUser);
  // console.log(post?.documents);

  return (
    <article className="profile-container">
      {isPending ? (
        <Loader />
      ) : (
        <>
          {/* Profile info */}
          <section className="grid grid-cols-4 bg-white shadow-md py-3 px-2 md:px-5 gap-2 w-full lg:w-2/3 rounded-lg">
            <div className="col-span-1">
              <img
                src={
                  user?.imageUrl ||
                  baseUrl + "/assets/images/profile-placeholder.svg"
                }
                alt="profile"
                className="size-10 md:size-14 rounded-full"
              />
            </div>
            <div className="col-span-2">
              {/* user info */}
              <section>
                <p className="base-medium lg:body-bold text-lg md:text-xl lg:text-2xl">
                  {user?.name}
                </p>
                <p>@{user?.username}</p>
                <p>{user?.bio}</p>
              </section>
              {/* user stats */}
              <section></section>
              <p>
                {post.length} {post.length == 1 ? "Post" : "Posts"}
              </p>
              {/* {currentUser.id === user?.$id ? <EditButton /> : <FollowButton />} */}
            </div>
          </section>
          {/* posts */}
          <section>
            {isPending ? (
              <Loader />
            ) : post?.length > 0 ? (
              <GridPostList key={post?.$id} posts={post} />
            ) : (
              <BlankSnack item="posts" />
            )}
          </section>
        </>
      )}
    </article>
  );
};

export default Profile;
