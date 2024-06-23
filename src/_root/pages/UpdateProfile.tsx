import { useGetUserById } from "@/lib/react-query/queries";
// import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateProfile = () => {
  const { id } = useParams();
  const { data: user } = useGetUserById(id || "");

  // const form = useForm<z.infer<typeof ProfileValidation>>({
  //   resolver: zodResolver(ProfileValidation),
  //   defaultValues: {
  //     file: [],
  //     name: user.name,
  //     username: user.username,
  //     email: user.email,
  //     bio: user.bio || "",
  //   },
  // });

  console.log(user);
  return <div>UpdateProfile</div>;
};

export default UpdateProfile;
