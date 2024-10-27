import { Models } from "appwrite";
import { Link } from "react-router-dom";

type GridPostListProps = {
  posts: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
};

const GridPostList = ({ posts }: GridPostListProps) => {
  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post?.$id} className="relative">
          <Link to={`/posts/${post?.$id}`} className="grid-post_link">
            <img
              src={post?.imageUrl}
              alt="post"
              className=" object-cover w-full rounded-[10px]"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
