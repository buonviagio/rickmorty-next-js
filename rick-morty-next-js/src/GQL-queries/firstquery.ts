import { gql } from "@apollo/client";

export const GET_SEASON = gql`
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