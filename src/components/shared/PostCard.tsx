import { useUserContext } from "@/context/AuthContext";
import { multiFormatDateString } from "@/lib/utils";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";
import { baseUrl } from "@/constants";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();
  if (!post.creator) return;

  return (
    <div className="post-card">
      <div className="flex-between px-3">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={
                post?.creator?.imageUrl ||
                baseUrl + "/assets/icons/profile-placeholder.svg"
              }
              className="rounded-full w-12 lg:h-12"
            />
          </Link>
          <div className="flex flex-col lg:gap-2">
            <Link to={`/profile/${post.creator.$id}`}>
              <p className="base-medium lg:body-bold">{post.creator.name}</p>
            </Link>

            <p className="subtle-semibold lg:small-regular">
              {multiFormatDateString(post.$createdAt)}
            </p>
            <p className="subtle-semibold lg:small-regular">
              Location: {post.location}
            </p>
          </div>
        </div>
        <Link
          to={`/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id && "hidden"}`}
        >
          <img
            src={baseUrl + "/assets/icons/edit.svg"}
            alt="edit"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <Link to={`/posts/${post.$id}`}>
        <div className="small-medium lg:base-medium p-3">
          <p>{post.caption}</p>
          <ul className="flex gap-3 mt-2">
            {post.tags.map((tag: string) => (
              <li key={tag} className="text-light-3">
                #{tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
          className="post-card_img"
          alt="post image"
        />
      </Link>
      <div className="px-3">
        <PostStats post={post} userId={user.id} />
      </div>
    </div>
  );
};

export default PostCard;
