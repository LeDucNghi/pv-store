"use client";

import "./tabs.scss";

import * as React from "react";

import Addresses from "../addresses/addresses";
import Box from "@mui/material/Box";
import Orders from "../orders/orders";
import ShippingTracking from "../shipping-tracking/tracking";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserProfile from "../profile/profile";

export interface ICustomTabsProps {}

export default function CustomTabs(props: ICustomTabsProps) {
  const [value, setValue] = React.useState("4");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="tabs-container" sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            className="tab-list-button-wrapper"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab className="tab-button" label="Profile" value="1" />
            <Tab className="tab-button" label="Orders" value="2" />
            <Tab className="tab-button" label="Tracking" value="3" />
            <Tab className="tab-button" label="Addresses" value="4" />
          </TabList>
        </Box>
        <TabPanel sx={{ p: 1, width: "100%", height: "100%" }} value="1">
          {" "}
          <UserProfile />{" "}
        </TabPanel>
        <TabPanel sx={{ p: 1, width: "100%", height: "100%" }} value="2">
          <Orders />
        </TabPanel>
        <TabPanel sx={{ p: 1, width: "100%", height: "100%" }} value="3">
          <ShippingTracking />
        </TabPanel>
        <TabPanel sx={{ p: 1, width: "100%", height: "100%" }} value="4">
          <Addresses />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
