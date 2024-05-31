import Loader from "@/components/shared/Loader";
import PostStats from "@/components/shared/PostStats";
import { Button } from "@/components/ui/button";
import { baseUrl } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { useGetPostById } from "@/lib/react-query/queries";
import { multiFormatDateString } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");
  const { user } = useUserContext();

  const handleDeletePost = () => {};

  return (
    <div className="post_details-container">
      {isPending && (
        <>
          <Loader /> Loading ...
        </>
      )}
      <div className="post_details-card">
        <img src={post?.imageUrl} alt="post" className="post_details-img" />
        <div className="post_details-info">
          <div className="flex-between w-full">
            {/* Creator */}
            <section className="flex items-center gap-3">
              <Link to={`/profile/${post?.creator.$id}`}>
                <img
                  src={
                    post?.creator?.imageUrl ||
                    baseUrl + "/assets/icons/profile-placeholder.svg"
                  }
                  className="rounded-full size-8 lg:size-12"
                />
              </Link>
              <div className="flex flex-col lg:gap-2">
                <Link to={`/profile/${post?.creator.$id}`}>
                  <p className="base-medium lg:body-bold">
                    {post?.creator.name}
                  </p>
                </Link>

                <p className="subtle-semibold lg:small-regular">
                  {multiFormatDateString(post?.$createdAt)}
                </p>
                <p className="subtle-semibold lg:small-regular">
                  Location: {post?.location}
                </p>
              </div>
            </section>

            {/* Eedit */}
            <section className="flex-center">
              <Link
                to={`/update-post/${post?.$id}`}
                className={`${user.id !== post?.creator.$id && "hidden"}`}
              >
                <img
                  src={baseUrl + "/assets/icons/edit.svg"}
                  alt="edit"
                  width={24}
                  height={24}
                />
              </Link>
              <Button
                onClick={handleDeletePost}
                variant="ghost"
                className={`${user.id !== post?.creator.$id && "hidden"}`}
              >
                <img
                  src={baseUrl + "/assets/icons/delete.svg"}
                  alt="delete"
                  width={24}
                  height={24}
                />
              </Button>
            </section>
          </div>

          {/* caption , tags */}
          <hr className="border w-full border-gray-200" />
          <section className="flex flex-col flex-1 w-full small-medium lg:base-regular">
            <p>{post?.caption}</p>
            <ul className="flex gap-1 mt-2">
              {post?.tags.map((tag: string) => (
                <li key={tag}>#{tag}</li>
              ))}
            </ul>
          </section>

          {/* stats */}
          <section className="w-full">
            <PostStats post={post} userId={user.id} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
