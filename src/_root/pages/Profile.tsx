import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUserById } from "@/lib/react-query/queries";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { data: user, isPending } = useGetUserById(id || "");

  console.log(user);

  return (
    <article className="profile-container">
      {isPending ? (
        <Loader />
      ) : (
        // @ts-expect-error Model.document[]
        <UserCard user={user} />
      )}
    </article>
  );
};

export default Profile;
