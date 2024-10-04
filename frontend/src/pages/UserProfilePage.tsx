import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { UpdateUser, isLoading: updateUserLoading } = useUpdateMyUser();
  const { currentUser, isLoading: currentUserLoading } = useGetMyUser();

  if (currentUserLoading) {
    return <span>Loading ....</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={UpdateUser}
      isLoading={updateUserLoading}
    />
  );
};

export default UserProfilePage;
