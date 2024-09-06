import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { vectorize } from "@/lib/vectorize";
import { sql } from "drizzle-orm";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Search = async ({ searchParams }: PageProps) => {
  const query = searchParams.q;
  console.log(query);

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  let products = await db
    .select()
    .from(productsTable)
    .where(
      sql`to_tsvector('simple', lower(${productsTable.name} || ' ' || ${
        productsTable.description
      })) @@ to_tsquery('simple', lower(${query
        .trim()
        .split(" ")
        .join(" & ")}))`
    )
    .limit(3);

  if (products.length < 3) {
    const vector = await vectorize(query);
  }
  return <div>{JSON.stringify(products)}</div>;
};

export default Search;
