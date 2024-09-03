"use client";

import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Search = ({ searchParams }: PageProps) => {
  const query = searchParams.q;
  console.log(query);

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  return <div>Search</div>;
};

export default Search;
