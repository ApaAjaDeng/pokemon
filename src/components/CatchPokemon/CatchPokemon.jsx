/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as GET_POKEMON_IMAGE from '../../graphQL/pokemon-image'
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import Gotcha from '../../asset/gotcha.png'
import React from 'react'
import { useHistory } from "react-router-dom";
import * as style from './style'

export const CatchPokemon = () => {
  const [wrongInput, setWrongInput] = React.useState(false)
  const [inputEmpty, setInputEmpty] = React.useState(true)
  const [givenName, setGivenName] = React.useState()
  const [caughtPokemonList, setCaughtPokemonList] = React.useState([])
  var submitData
  let history = useHistory();

  //Change to catch the Pokemon
  const [random] = React.useState(Math.random())

  React.useState(() => {
    if (localStorage.getItem('caughtPokemonList') == null || JSON.parse(localStorage.getItem('caughtPokemonList')).length === 0) {

    }
    else {
      setCaughtPokemonList(JSON.parse(localStorage.getItem('caughtPokemonList')))
    }
  })

  //GET VARIABEL FROM URL
  const { name } = useParams();

  //UPPERCASE CASE FIRST LETTER
  var pokeName = name.charAt(0).toUpperCase() + name.slice(1)

  //GQL VARIABLES
  const gqlVariables = {
    name: name,
  };

  //CALLING GQLQUERY
  const { loading, error, data } = useQuery(GET_POKEMON_IMAGE.PokemonImage_Query, {
    variables: gqlVariables,
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  var backImg = data.pokemon.sprites.back_default;
  var frontImg = data.pokemon.sprites.front_default

  //Handling for Input Name 
  const handleInputName = (event) => {
    if (localStorage.getItem('caughtPokemonList') === null || JSON.parse(localStorage.getItem('caughtPokemonList')).length === 0) {
      setGivenName(event.target.value)
      if (event.target.value.length > 0) {
        setInputEmpty(false)
      }
    }
    else {
      setGivenName(event.target.value)
      for (var i = 0; i < caughtPokemonList.length; i++) {
        if (caughtPokemonList[i][1] === event.target.value) {
          setWrongInput(true)
          setInputEmpty(true)
          break;
        }
        else {
          setWrongInput(false)
          setInputEmpty(false)
        }
      }
    }
    if (event.target.value === "") {
      setInputEmpty(true)
    }
  }

  //Handling Button
  const onClickBtnSubmit = () => {
    submitData = [name, givenName, frontImg]
    caughtPokemonList.push(submitData)
    console.log(caughtPokemonList)
    localStorage.setItem('caughtPokemonList', JSON.stringify(caughtPokemonList))
    history.push('/pokemon-list')
  }
  const onClickBtnReleased = () => {
    if (window.confirm("Are you sure you want to released the Pokemon ?")) {
      history.push('/pokemon-list')
    }
  }
  const onClickBtnBack = () => {
    history.push('/pokemon-detail/' + name)
  }


  //Successfully caught a pokemon
  if (random > 0.5) {
    return (
      <div css={style.contentContainer}>
        <div css={style.gotchaContainer}>
          <img alt="Gotcha!!!" css={style.imgGotcha} src={Gotcha}></img>
          <text>GOTCHA!!!</text>
          <text>YOU SUCCESSFULLY CAUGHT A {pokeName}!!!</text>
        </div>
        <div css={style.cardDetail}>
          <text>Give your Pokemon a name</text>
          <div css={style.detailContainer}>
            <img alt="Pokemon" css={style.pokemonImgCatched} src={frontImg}></img>
            <div css={style.inputContainer}>
              <input maxLength='8' onChange={handleInputName} css={wrongInput ? style.inputNameError : style.inputName} type="text" />
              <text css={wrongInput ? style.alertExist : style.notExist}>The name already exist</text>
            </div>
          </div>
          <div css={style.btnContainer}>
            <button onClick={onClickBtnSubmit} disabled={inputEmpty} css={inputEmpty ? style.btnSubmitError : style.btnSubmit}>NAMED</button>
            <button onClick={onClickBtnReleased} css={style.btnReleased}>RELEASED</button>
          </div>
        </div>
      </div>
    )
  }

  //The Pokemon has Escaped
  else {
    return (
      <div css={style.contentContainer}>
        <div css={style.escapedContainer}>
          <img css={style.escapedImg} alt='' src={backImg}></img>
          <text css={style.textEscaped}>Pokemon Has Escaped 😞</text>
          <text css={style.textEscaped}>Try again and give your best 😤 !!!</text>
          <button onClick={onClickBtnBack} css={style.btnBack}>Back</button>
        </div>
      </div>
    )
  }
}