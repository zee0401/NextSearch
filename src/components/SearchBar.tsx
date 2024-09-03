import React from "react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="relative h-12 w-full flex flex-col ">
      <div className="relative h-14 z-10 rounded-md">
        <Input className="absolute inset-0 h-ful" />
      </div>
    </div>
  );
};

export default SearchBar;
