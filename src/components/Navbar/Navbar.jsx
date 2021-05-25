/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom';
import PokeBall from '../../asset/pokeball.png'
import Pokedex from '../../asset/pokedex.png'
import * as style from './style'

function Navbar() {
  return (
    <div css={style.base}>
      <Link css={style.containerLink1} to={"/pokemon"}>
        <img alt="Pokedex" css={style.iconNav} src={Pokedex}></img>
      </Link>
      <Link css={style.containerLink2} to={"/my-pokemon-list"}>
        <img alt="My Pokemon" css={style.iconNav} src={PokeBall}></img>
      </Link>
    </div >
  )
}

export default Navbar;