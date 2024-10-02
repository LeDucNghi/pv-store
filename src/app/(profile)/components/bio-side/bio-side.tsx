import "./bio-side.scss";

import * as React from "react";

import { Avatar, Chip, Paper } from "@mui/material";

import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { images } from "@/constants";

export interface IBioSideProps {}

export default function BioSide(props: IBioSideProps) {
  return (
    <div className="bio-side-container">
      <Paper elevation={8} className="bio-wrapper">
        <div className="bio-avatar flex-center">
          <Avatar
            alt="Remy Sharp"
            src={images.logoBorder.src}
            className="avatar"
          >
            R
          </Avatar>
        </div>

        <div className="bio">
          <h1>Remy Sharp</h1>

          <h3>new member</h3>

          <div className="py-8">
            <div className="w-full flex justify-center">
              <ModeCommentIcon />
              <ModeCommentIcon />
            </div>

            <p className="font-semibold text-center">
              Im looking for a site that will simplify the planning of my
              business trips.
            </p>
          </div>

          <Paper elevation={3} className="px-2 py-2">
            <div className="bio-info flex flex-col">
              <div className="flex items-start">
                <p className="font-bold">Birthday:</p>
                <p className="px-2">10/10/2000</p>
              </div>
              <div className="flex items-start">
                <p className="font-bold">Address:</p>
                <p className="px-2">
                  15 đường số 18, phường 8, quận Gò Vấp, TPHCM{" "}
                </p>
              </div>
            </div>

            {/* <div className="bio-tags">
              <Chip label="Delay" />
              <Chip label="Delay" />
              <Chip label="Delay" />
              <Chip label="Delay" />
            </div> */}
          </Paper>
        </div>
      </Paper>
    </div>
  );
}
