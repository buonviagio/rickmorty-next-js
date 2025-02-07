import Image from "next/image";
import { fetchCharacters } from "../../actions/charactersActions";
import styles from "./page.module.css";
import Link from "next/link";

const API_URL = "https://rickandmortyapi.com/api/character";

type CharacterPageProps = {
  params: Promise<{ page: number }>;
};

async function CharacterPage({ params }: CharacterPageProps) {
  const { page: pageParam } = await params;

  const page = pageParam ? Number(pageParam) : 1;
  console.log("page :>> ", page);
  const data = await fetchCharacters(page, API_URL);

  return (
    <div className={styles.mainContainer}>
      <h1>List of Characters</h1>
      <section className={styles.cardContainer}>
        {data.results.map((character) => (
          <div key={character.id} className={styles.card}>
            <Link href={`/rickmorty/character/${character.id}`}>
              <p className={styles.linkToTheDetailsPage}>Learn more</p>
            </Link>
            <Image
              src={character.image}
              alt={character.name}
              width={240}
              height={240}
            />
          </div>
        ))}
      </section>
      {/* Pagination Links */}
      <div
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          gap: "10px",
        }}
      >
        {page > 1 && <Link href={`/rickmorty/${page - 1}`}>Previous</Link>}
        <span>
          Page {page} of {data.info.pages}
        </span>
        {page < data.info.pages && (
          <Link href={`/rickmorty/${page + 1}`}>Next</Link>
        )}
      </div>
    </div>
  );
}

export default CharacterPage;

// import Image from "next/image";
// import { ApiResponse, Character } from "../models/customType";
// import Link from "next/link";

// export default async function CaracterPage() {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = (await response.json()) as ApiResponse;
//   const characters = data.results;

//   return (
//     <div>
//       {characters.map((character) => {
//         return (
//           <div key={character.id}>
//             {character.name}
//             <Link href={`character/${character.id}`}>
//               <Image
//                 src={character.image}
//                 width={300}
//                 height={300}
//                 alt={character.name}
//               />
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
