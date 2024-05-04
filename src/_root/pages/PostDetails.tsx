import Loader from "@/components/shared/Loader";
import { baseUrl } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { multiFormatDateString } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");
  const { user } = useUserContext();

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
            <section className="flex-center gap-4">
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
