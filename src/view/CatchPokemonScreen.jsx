/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { CatchPokemon } from '../components/CatchPokemon/CatchPokemon'

const CatchPokemonScreen = () => {
  const base = css`
    background-color: #5f939a;
    max-height: auto;
    min-height: 78vh;
    padding: 10vh;
    @media (max-width: 1025px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  `

  return (
    <div css={base}>
      <CatchPokemon />
    </div>
  );
}

export default (CatchPokemonScreen);