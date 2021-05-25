/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ListOfCaughtPokemons } from '../components/ListOfCaughtPokemons/ListOfCaughtPokemons'

const CaughtPokemonList = () => {
  const base = css`
    background-color: #5f939a;
    max-height: auto;
    min-height: 78vh;
    padding: 10vh;
  `

  return (
    <div css={base}>
      <ListOfCaughtPokemons />
    </div>
  );
}

export default (CaughtPokemonList);