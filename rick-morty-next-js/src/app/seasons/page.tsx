"use client";
import { GET_SEASON } from "@/GQL-queries/firstquery";
import { Character } from "@/models/customType";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function RickMortySeasons() {
  const [season, setSeason] = useState("S01");
  //const [episodes, setEpisodes] = useState([]);
  const { data, loading } = useQuery(GET_SEASON, {
    variables: { season },
  });

  console.log("data :>> ", data);
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
          onChange={(e) => setSeason(e.target.value)}
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
            data.episodes.results.map((episode, index) => (
              <tr key={episode.id}>
                <td>{String(index + 1).padStart(2, "0")}</td>
                <td>{episode.name}</td>
                <td>
                  <div className="d-flex flex-wrap">
                    {episode.characters.map((character: Character) => (
                      <img
                        key={character.id}
                        src={character.image}
                        alt={character.name}
                        title={character.name}
                        style={{
                          width: "40px",
                          height: "40px",
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
