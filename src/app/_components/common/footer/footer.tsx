import "./footer.scss";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { images } from "@/constants";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer>
      <div className="footer-head flex-center">
        <Image
          src={images.logo}
          alt="logo"
          width={200}
          height={200}
          objectFit="cover"
        />

        <span>Stay informed about special offers</span>

        <p>Subscribe to the newsleter</p>
      </div>

      <div className="footer-info">
        <ul>
          <li className="info-title">lets get together</li>
          <li>
            <FmdGoodIcon className="info-icon" />

            <p>Đường số 1, phường 16, quận GÒ VẤP, TPHCM</p>
          </li>
          <li>
            <AccessTimeIcon className="info-icon" />

            <p>Mon - Sun: 9AM - 21PM</p>
          </li>
          <li>
            <LocalPhoneIcon className="info-icon" />

            <p> 0327671602 </p>
          </li>
          <li>
            <div className="social-icon flex-center">
              <FacebookIcon fontSize="small" className="icon" />
            </div>

            <div className="social-icon flex-center">
              <InstagramIcon fontSize="small" className="icon" />
            </div>
          </li>
        </ul>

        <ul>
          <li className="info-title">about us</li>
          <li>
            <p>Our Story</p>
          </li>
          <li>
            <p>Our Team</p>
          </li>
          <li>
            <p>Our Food</p>
          </li>
          <li>
            <p>Health Measures</p>
          </li>
          <li>
            <p>Job Opportunities</p>
          </li>
        </ul>

        <ul>
          <li className="info-title">quick menu</li>
          <li>
            <p>Beef Burgers</p>
          </li>
          <li>
            <p>Chicken Burgers</p>
          </li>
          <li>
            <p>Plant-Based Burgers</p>
          </li>
          <li>
            <p>Sides</p>
          </li>
          <li>
            <p>Drinks</p>
          </li>
        </ul>
      </div>

      <div className="footer-copy-right ">
        <p>©2021 BoldThemes All rights reserved</p>
      </div>
    </footer>
  );
}
