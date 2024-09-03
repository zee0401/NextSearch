"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Search = ({ searchParams }: PageProps) => {
  console.log(searchParams);
  return <div>Search</div>;
};

export default Search;
