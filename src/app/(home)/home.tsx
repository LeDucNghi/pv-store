import "./home.scss";

import DeliverySteps from "./components/delivery/delivery";
import HomeLayout from "../_components/layouts/home-layout/home-layout";
import Mail from "./components/mail/mail";
import Menu from "./components/menu/menu";
import Offers from "./components/offers/offers";
import WeeklyOffer from "./components/weekly-offer/weekly-offer";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <HomeLayout>
      <DeliverySteps />

      <Offers />

      <Menu />

      <Mail />

      <WeeklyOffer />
    </HomeLayout>
  );
}
