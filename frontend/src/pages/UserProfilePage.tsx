import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { UpdateUser, isLoading } = useUpdateMyUser();

  return <UserProfileForm onSave={UpdateUser} isLoading={isLoading} />;
};

export default UserProfilePage;
