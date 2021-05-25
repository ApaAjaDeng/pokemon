/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import CrankySnorlax from '../../asset/snorlax_crancky.png'
import * as style from './style'


export const ListOfCaughtPokemons = () => {
  const [pokemonList, setPokemonList] = React.useState([])
  const [display, setDisplay] = React.useState()

  React.useState(() => {
    if (localStorage.getItem('caughtPokemonList') === null || JSON.parse(localStorage.getItem('caughtPokemonList')).length === 0) {
      setDisplay('noPokemon')
    }
    else {
      setDisplay('pokemon')
      setPokemonList(JSON.parse(localStorage.getItem('caughtPokemonList')))
    }
  })


  const btnRelease = (index, pokeName) => {
    if (window.confirm("Are you sure you want to released the " + pokeName + "?")) {
      var arr = pokemonList;
      arr.slice(0)
      arr.splice(index, 1)
      localStorage.setItem('caughtPokemonList', JSON.stringify(arr))
      setPokemonList(JSON.parse(localStorage.getItem('caughtPokemonList')))
      if(arr.length === 0){
        setDisplay('noPokemon')
      }
    }
  }

  if (display === 'pokemon') {
    return (
      <div>
        <div css={style.cardContainer}>
          {pokemonList.map((result, index) =>
            <div onClick={() => btnRelease(index, result[1])} css={style.card}>
              <img alt='' src={result[2]}></img>
              <text css={style.text}>#{index + 1}</text>
              <text css={style.textName}>{result[1]}</text>
            </div>
          )}
        </div>
      </div>
    )
  }
  else {
    return (
      <div css={style.noPokemonContainer}>
        <img alt='' css={style.snorlaxImg} src={CrankySnorlax}></img>
        <text css={style.textNoPokemon}>There no Pokémon here 😒</text>
        <text css={style.textNoPokemon}>Go Explore and Catch a Pokémon 😡!!!</text>
      </div>
    )
  }
}