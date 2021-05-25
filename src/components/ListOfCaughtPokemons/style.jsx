import { css } from '@emotion/react'

//EMOTION CSS
export const cardContainer = css`
  display: grid;
  grid-gap: 5vh;
  padding-left: 20vw;
  padding-right: 20vw;
  grid-template-columns: auto auto auto auto auto;
  place-items: center;
  padding-top: 2vh;
  padding-bottom: 3vh;
  @media (max-width: 1025px) {
    padding-left: 0vw;
    padding-right: 0vw;
  }
  @media (max-width: 541px) {
    grid-template-columns: auto auto auto;
    grid-gap: 2.5vh;
    padding-left: 0vw;
    padding-right: 0vw;
  }
  @media (max-width: 420px) {
    grid-template-columns: auto auto;
    grid-gap: 2.5vh;
    padding-left: 0vw;
    padding-right: 0vw;
  }
  @media (max-width: 281px) {
    grid-template-columns: auto;
    grid-gap: 2.5vh;
    padding-left: 0vw;
    padding-right: 0vw;
  }
`
export const card = css`
  background-color: rgba(255, 255, 255, 0.63);
  border-radius: 5.5px;
  box-shadow: 5px 5px rgb(70 70 80);
  margin-top: 3%
  text-align-last: center;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: -webkit-fill-available;
  text-decoration: none;
  color: black;
  &:hover{
    background-color: #8f0000;
    box-shadow:inset 0px 2px 5px 7px #ff3333;
    color: white;
  } 
  &:active {
    position:relative;
    top:7px;
  }
`
export const text = css`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  padding-bottom: 5px;
  font-family: "Lucida Console", sans-serif;
`
export const textName = css`
  ${text};
  font-style: normal;
  font-weight: bold;
`
export const noPokemonContainer = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export const snorlaxImg = css`
  width: 35vh;
  margin-top: 25px;
`
export const textNoPokemon = css`
  text-align: center;
`
