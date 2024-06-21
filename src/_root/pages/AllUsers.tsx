import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/lib/react-query/queries";

const AllUsers = () => {
  const {
    data: users,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers();

  return (
    <div className="common-container">
      <h2 className="h3-bold md:h2-bold w-full"> All Users</h2>
      {isErrorCreators && <p>Error on loading data</p>}
      {isUserLoading ? (
        <Loader />
      ) : (
        <section className="user-grid">
          {users?.documents.map((user) => (
            // @ts-expect-error Model.document[]
            <UserCard key={user.$id} user={user} />
          ))}
        </section>
      )}
    </div>
  );
};

export default AllUsers;
