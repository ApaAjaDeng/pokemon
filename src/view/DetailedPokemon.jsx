/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { PokemonDetail } from '../components/PokemonDetail/PokemonDetail'

const DetailedPokemon = () => {
  //EMOTION CSS
  const base = css`
    background-color: #5f939a;
    max-height: auto;
    min-height: 78vh;
    padding: 10vh;
    @media (max-width: 1025px) {
      padding-left: 5vw;
      padding-right: 5vw;
    }
  `

  return (
    <div css={base}>
      <PokemonDetail />
    </div>
  );
}

export default (DetailedPokemon);