import ProfileLayout from "@/app/_components/layouts/profile-layout/profile-layout";

export interface IUserPageProps {}

export default function UserPage(props: IUserPageProps) {
  return (
    <ProfileLayout>
      <div className="profile-wrapper flex justify-between h-full"></div>
    </ProfileLayout>
  );
}
