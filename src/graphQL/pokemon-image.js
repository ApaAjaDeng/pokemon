import { gql } from 'apollo-boost';

export const PokemonImage_Query = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        back_default
        front_default
      }
    }
  }
`;