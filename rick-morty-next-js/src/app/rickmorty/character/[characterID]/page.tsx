import { Character } from "@/models/customType";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { Button } from "react-bootstrap";
import { fetchCharacter } from "@/app/actions/characterFetch";
import Link from "next/link";

const API_URL = "https://rickandmortyapi.com/api/character";

type CharacterDetailProps = {
  params: Promise<{ characterID: string }>;
};

export async function generateStaticParams() {
  const characterId = await fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return characterId.map((character: Character) => ({
    slug: character.id,
  }));
}

export default async function CharacterDetail({
  params,
}: CharacterDetailProps) {
  const { characterID } = await params;

  console.log("characterID :>> ", characterID);
  const character = await fetchCharacter(Number(characterID), API_URL);
  console.log("character :>> ", character);

  return (
    <div className={styles.mainContainerForCharacterPage}>
      <div className={styles.backListButtonContainer}>
        <Link href={"/rickmorty/1"}>
          <Button variant="secondary">Back to List...</Button>
        </Link>
      </div>
      <div className={styles.characterInfoContainer}>
        <Image
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
        />
        <div className={styles.cardInfo}>
          <p>Name {character.name}</p>
          <p>Status {character.status}</p>
          <p>Species {character.species}</p>
          <p>Gender {character.gender}</p>
          <p>Origin {character.origin.name}</p>
        </div>
      </div>
      <div className={styles.paginationButtons}>
        <Link href={`/rickmorty/character/${Number(characterID) - 1}`}>
          <Button variant="info">Prev</Button>
        </Link>
        <Link href={`/rickmorty/character/${Number(characterID) + 1}`}>
          <Button variant="info">Next</Button>
        </Link>
      </div>
    </div>
  );
}
