import * as React from "react";

import BioSide from "../components/bio-side/bio-side";
import InformationsSide from "../components/informations-side/informations-side";
import ProfileLayout from "@/app/_components/layouts/profile-layout/profile-layout";

export interface IUserPageProps {}

export default function UserPage(props: IUserPageProps) {
  return (
    <ProfileLayout>
      <div className="profile-wrapper flex justify-between h-full">
        <BioSide />

        <InformationsSide />
      </div>
    </ProfileLayout>
  );
}
