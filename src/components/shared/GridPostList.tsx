import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";

type GridPostListProps = {
  posts: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
};

const GridPostList = ({
  posts,
  showUser = true,
  showStats = true,
}: GridPostListProps) => {
  const user = useUserContext();
  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.$id} className="relative min-w-80 h-80">
          <Link to={`/posts/${post.$id}`} className="grid-post_link">
            <img
              src={post.imageUrl}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>
          <section className="grid-post_user">
            {showUser && (
              <div className="flex items-center rounded-lg justify-start gap-2 flex-1 bg-white bg-opacity-80 px-3 py-2">
                <img
                  src={post.creator.imageUrl}
                  alt="creator"
                  className="h-8 w-8 rounded-full line-clamp-1"
                />
                <p>{post.creator.name}</p>
              </div>
            )}
            {showStats && (
              <div className="bg-white bg-opacity-80 px-3 py-2 rounded-lg">
                <PostStats post={post} userId={user.id} />
              </div>
            )}
          </section>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
