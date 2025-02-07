import { Root } from "@/models/customType";
import { gql, TypedDocumentNode } from "@apollo/client";
//import { Root } from "react-dom/client";

export const GET_SEASON: TypedDocumentNode<Root, { season: string }> = gql`
query GetSeason ($season: String!) {
  episodes(filter:  {
      episode: $season
  }) {
    results {
      name
      id
      characters{
        image
        name 
        id
      }
    }
  }
}`