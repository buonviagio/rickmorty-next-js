import React, { Suspense } from "react";

import { PreloadQuery } from "../../lib/ApolloClient";
import { GET_SEASON } from "@/GQL-queries/firstquery";

import { Spinner } from "react-bootstrap";
import styles from "./page.module.css";
import RickMortySeasons from "@/components/RickMortySeasons";

type DynamicSeasonProps = {
  searchParams: Promise<{ season: string }>;
};

export default async function DynamicSeason({
  searchParams,
}: DynamicSeasonProps) {
  //new
  const { season } = await searchParams;
  console.log("DynamicSeason Component ", season);
  return (
    <PreloadQuery
      query={GET_SEASON}
      variables={{
        season: season || "S01",
      }}
      //can i send an array of parameters?
    >
      <Suspense
        fallback={
          <div className={styles.loadSection}>
            {/* <Spinner animation="border" role="status" /> */}
          </div>
        }
      >
        <RickMortySeasons />
      </Suspense>
    </PreloadQuery>
  );
}
