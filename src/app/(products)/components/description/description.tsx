import * as React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Product } from "@/models";
import { prodTags } from "@/_mock";

export interface IDescriptionProps {
  product: Product;
}

export default function Description({ product }: IDescriptionProps) {
  return (
    <div className="description-container">
      <div className="description">
        <h2>description</h2>
        <p> {product.description} </p>
      </div>

      <div className="meta-tag">
        <ul className="tag">
          {prodTags.map((tag, key) => {
            return (
              <li key={key}>
                <LocalOfferIcon />

                <p> {tag.tag} </p>
              </li>
            );
          })}
        </ul>

        <ul className="meta">
          <li>
            <IconButton className="meta-icon flex-center">
              <FacebookIcon />
            </IconButton>
          </li>
          <li>
            <IconButton className="meta-icon flex-center">
              <InstagramIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
