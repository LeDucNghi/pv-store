import "./addresses.scss";

import * as React from "react";

import { Button, Divider } from "@mui/material";

import { addresses } from "@/_mock";

export interface IAddressesProps {}

export default function Addresses(props: IAddressesProps) {
  return (
    <div className="addresses-container">
      {addresses.map((address, key) => {
        return (
          <div className="address-item" key={key}>
            <div className="address address-info">
              <div className="user-info">
                <span> {address.receiver} </span> &nbsp;|&nbsp;
                <span> {address.phoneNumber} </span>
              </div>
              <div className="address">
                <span> {address.address} </span>
                <span> {address.location} </span>
              </div>
            </div>
            <div className="address address-actions">
              <div className="">
                <Button>update</Button>
                <Button>delete</Button>
              </div>
              <Button variant="outlined" className="set-default">
                set default
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
