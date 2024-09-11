"use client";

import "./search.scss";

import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export interface ISearchProps {}

export default function Search(props: ISearchProps) {
  return (
    <div className="search-container">
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Looking for...
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          className="search-field"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          label="Looking for..."
        />
      </FormControl>
    </div>
  );
}
