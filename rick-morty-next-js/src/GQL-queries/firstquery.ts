import { gql } from "@apollo/client";

export const GET_PAGE1 = gql`
query GetAllCharacter { 
  characters {
    results {
      name
    }
  }
}
`;

export const GET_SEASON = gql`
query GetSeason ($season: String!) {
  episodes(filter:  {
      episode: $season
  }) {
    results {
      name
      characters{
        image
        name 
        id
      }
    }
  }
}`