import Loader from "@/components/shared/Loader";
import { baseUrl } from "@/constants";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { multiFormatDateString } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");

  console.log(post);

  return (
    <div className="post_details-container">
      {isPending && (
        <>
          <Loader /> Loading ...
        </>
      )}
      <div className="post-card">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post?.creator.$id}`}>
            <img
              src={
                post?.creator?.imageUrl ||
                baseUrl + "/assets/icons/profile-placeholder.svg"
              }
              className="rounded-full w-12 lg:h-12"
            />
          </Link>
          <div className="flex flex-col lg:gap-2">
            <Link to={`/profile/${post?.creator.$id}`}>
              <p className="base-medium lg:body-bold">{post?.creator.name}</p>
            </Link>

            <p className="subtle-semibold lg:small-regular">
              {multiFormatDateString(post?.$createdAt)}
            </p>
            <p className="subtle-semibold lg:small-regular">
              Location: {post?.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
