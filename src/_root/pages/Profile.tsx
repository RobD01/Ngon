import GridPostList from "@/components/shared/GridPostList";
import {
  useGetCurrentUser,
  useGetRecentPosts,
} from "@/lib/react-query/queries";

const Profile = () => {
  const { data: currentUser } = useGetCurrentUser();
  const { data: post, isPending } = useGetRecentPosts();

  console.log(post?.documents);

  return <div>{<GridPostList posts={post?.documents} />}</div>;
};

export default Profile;
