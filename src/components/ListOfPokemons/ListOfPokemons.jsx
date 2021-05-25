/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useQuery } from '@apollo/client';
import * as GET_POKEMONS from '../../graphQL/get-pokemon'
import { Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import PokeballIcon from '../../asset/pokeball_icon.png'
import * as style from './style'


export const ListOfPokemons = () => {
  const [count, setCount] = React.useState(1);
  const [offset, setOffset] = React.useState(0);
  const [disableBtnPrev, setDisableBtnPrev] = React.useState(true)
  const [disableBtnNext, setDisableBtnNext] = React.useState(false)
  var countPokemon = 0
  var listCaughtPokemon

  //Button Handler
  const onClickBtnNext = () => {
    setOffset(offset + 20);
    setCount(count + 1);
  }
  const onClickBtnPrev = () => {
    setOffset(offset - 20);
    setCount(count - 1);
  }

  //Count Pokemon in my-pokemon
  const countCaughtPokemon = (pokeName) => {
    if (localStorage.getItem('caughtPokemonList') !== null) {
      listCaughtPokemon = JSON.parse(localStorage.getItem('caughtPokemonList'))
      for (var i = 0; i < listCaughtPokemon.length; i++) {
        if (listCaughtPokemon[i][0] === pokeName) {
          countPokemon += 1;
        }
      }
    }
  }

  const resetCountPokemon = () => {
    countPokemon = 0;
  }

  //DISABLED BUTTON PAGE
  React.useEffect(() => {
    if (offset === 0) {
      setDisableBtnPrev(true)
    }
    else if (offset !== 0) {
      setDisableBtnPrev(false)
    }
  }, [count, offset]);

  //DISABLED BUTTON PAGE
  React.useEffect(() => {
    if (offset === 1100) {
      setDisableBtnNext(true)
    }
    else if (offset !== 1100) {
      setDisableBtnNext(false)
    }
  }, [offset]);

  //GQL VARIABLES
  const gqlVariables = {
    offset: offset,
  };

  //CALLING GQLQUERY
  const { loading, error, data } = useQuery(GET_POKEMONS.PokemonList_Query, {
    variables: gqlVariables,
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div css={style.cardContainer}>
        {data.pokemons.results.map(result =>
          <Link to={"/pokemon-detail/" + result.name} css={style.card}>
            <img alt="Pokemon" src={result.image}></img>
            <text css={style.text}>
              #{result.id}
            </text>
            <text css={style.textName}>
              {result.name}
            </text>
            {countCaughtPokemon(result.name)}
            <div css={style.countContainer}>
              <img css={style.pokeballImg} src={PokeballIcon} alt=""></img>
              <text css={style.textCount}>
                {countPokemon}
              </text>
            </div>
            {resetCountPokemon()}
          </Link >
        )}
      </div >
      <div css={style.pageBtnContainer}>
        <button css={style.btnPrev} onClick={onClickBtnPrev} disabled={disableBtnPrev}>
          Prev
        </button>
        <Typography css={style.pageNumber}>
          {count}
        </Typography>
        <button css={style.btnNext} onClick={onClickBtnNext} disabled={disableBtnNext}>
          Next
        </button>
      </div>
    </div >
  )
}