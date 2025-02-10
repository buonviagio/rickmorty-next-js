"use client";
import { GET_SEASON } from "@/GQL-queries/firstquery";
import { Character, Data } from "@/models/customType";
import { useSuspenseQuery } from "@apollo/client";
import React, { useState } from "react";
import styles from "../app/seasons/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RickMortySeasons() {
  const [season, setSeason] = useState("S01");
  //new
  const router = useRouter();
  const { data } = useSuspenseQuery<Data>(GET_SEASON, {
    variables: { season: season },
  });
  // const { data, loading } = useQuery(GET_SEASON, {
  //   variables: { season },
  // });

  return (
    <div className={styles.container}>
      <div className="mb-3">
        <label htmlFor="seasonSelect" className="form-label">
          Choose a season:
        </label>
        <select
          id="seasonSelect"
          className="form-select"
          value={season}
          onChange={(e) => {
            setSeason(e.target.value);
            //new
            router.push(`?season=${e.target.value}`);
          }}
        >
          <option value="S01">Season 1</option>
          <option value="S02">Season 2</option>
          <option value="S03">Season 3</option>
          <option value="S04">Season 4</option>
          <option value="S05">Season 5</option>
        </select>
      </div>

      {/* Table */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Featured Characters</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.episodes.results.map((episode) => (
              <tr key={episode.id}>
                <td>{String(episode.id).padStart(2, "0")}</td>
                <td>{episode.name}</td>
                <td>
                  <div className="d-flex flex-wrap">
                    {episode &&
                      episode.characters.map((character: Character) => (
                        <Image
                          key={character.id}
                          src={character.image}
                          alt={character.name}
                          title={character.name}
                          width={40}
                          height={40}
                          style={{
                            margin: "5px",
                            borderRadius: "50%",
                            border: "1px solid #ddd",
                          }}
                        />
                      ))}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
