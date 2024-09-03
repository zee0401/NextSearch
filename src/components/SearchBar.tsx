"use client";
import React, { useRef, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isSearching, startTransition] = useTransition();

  const [query, setQuery] = useState("");

  const router = useRouter();

  const search = () => {
    startTransition(() => {
      router.push(`/search?q=${query}`);
    });
  };

  return (
    <div className="relative h-12 w-full flex flex-col ">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              inputRef?.current?.blur();
            }
            if (e.key === "Enter") {
              search();
            }
          }}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />
        <Button
          onClick={search}
          className="absolute right-0 inset-y-0 h-full rounded-1-none"
          disabled={isSearching}
        >
          {isSearching ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Search className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
