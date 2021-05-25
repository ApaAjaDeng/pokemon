import { gql } from 'apollo-boost';

export const PokemonDetail_Query = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      base_experience
      sprites {
        front_default
      }
      stats{
        stat{
          name  
        }
        base_stat
        effort
      }
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;