import { baseUrl } from "@/constants";
// import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: {
    id: string;
    imageUrl: string;
    username: string;
    name: string;
    $id: string;
  };
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <section className="user-card">
      <Link to={`/profile/${user.$id}`} className="flex flex-col items-center">
        <img
          src={
            user.imageUrl || baseUrl + "/assets/images/profile-placeholder.svg"
          }
          alt="profile"
          className="size-12 rounded-full"
        />
        <p className="base-medium lg:body-bold">{user.name}</p>
        <p className="">@{user.username}</p>
      </Link>

      {/* <Button className="shad-button_primary">Follow</Button> */}
    </section>
  );
};

export default UserCard;
