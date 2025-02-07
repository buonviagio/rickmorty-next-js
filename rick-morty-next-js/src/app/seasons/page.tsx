import React, { Suspense } from "react";

import { PreloadQuery } from "../../lib/ApolloClient";
import { GET_SEASON } from "@/GQL-queries/firstquery";
import RickMortySeasons from "./RickMortySeasons";
import { Spinner } from "react-bootstrap";
import styles from "./page.module.css";
//export const dynamic = "force-dynamic";

export default function DynamicSeason() {
  console.log("DynamicSeason");
  return (
    <PreloadQuery
      query={GET_SEASON}
      variables={{
        season: "S01",
      }}
      //can i send an array of parameters?
    >
      <Suspense
        fallback={
          <div className={styles.loadSection}>
            <Spinner animation="border" role="status" />
          </div>
        }
      >
        <RickMortySeasons />
      </Suspense>
    </PreloadQuery>
  );
}
