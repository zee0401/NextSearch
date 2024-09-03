import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative h-12 w-full flex flex-col ">
      <div className="relative h-14 z-10 rounded-md">
        <Input className="absolute inset-0 h-full" />
        <Button className="absolute right-0 inset-y-0 h-full rounded-1-none">
          <Search />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
