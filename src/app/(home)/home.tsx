import "./home.scss";

import DeliverySteps from "./components/delivery/delivery";
import HomeLayout from "../_components/layouts/home-layout/home-layout";
import Menu from "./components/menu/menu";
import Offers from "./components/offers/offers";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <HomeLayout>
      <DeliverySteps />

      <Offers />

      <Menu />
    </HomeLayout>
  );
}
