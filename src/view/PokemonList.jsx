/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ListOfPokemons } from '../components/ListOfPokemons/ListOfPokemons'

const PokemonList = () => {
  const base = css`
    background-color: #5f939a;
    max-height: auto;
    min-height: 78vh;
    padding: 10vh;
  `

  return (
    <div css={base}>
      <ListOfPokemons />
    </div>
  );
}

export default (PokemonList);