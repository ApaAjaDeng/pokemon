import { css } from '@emotion/react'

//EMOTION CSS
export const contentContainer = css`
  padding-top: 2vh;
  padding-left: 15vw;
  padding-right: 15vw;
  @media (max-width: 1025px) {
    padding-left: 0vw;
    padding-right: 0vw;
  }
`
export const detailContainer = css`
  align-items: center;
  align-self: center;
  display:flex;
  flex-direction: column;
  place-content: center;
  padding: 15px;
  margin: 1vh;
  border-radius: 10px;
  background-color: #06bce5;
  box-shadow:inset 0px 1px 3px 5px #0589c2;
`
export const pokeImg = css`
  width: 25vh;        
  background-color: #cccccc;
  border-radius: 20rem;
  margin: 1vh;
  border: 4px ridge #B0B0B0;
`
export const textName = css`
  font-weight: bolder;
  text-transform: capitalize;
`
export const detailText = css`
  font-weight: bolder;
  color: black;
`
export const detailTextStat = css`
  font-weight: bold;
  color: black;
`
export const nameContainer = css`
  padding: 1rem;
  box-shadow:inset 0px 1px 3px 5px #b8ac2e;
  background-color: #ebd914;
  text-align: center;
  border-radius: 5rem;
  margin-left: 1vh;
  margin-right: 1vh;
`
export const typeCard = css`
  padding: 1rem;
  box-shadow:inset 0px 1px 3px 5px #33841f;
  background-color: #3a9c21;
  text-align: center;
  border-radius: 5rem;
  margin-left: 1vh;
  margin-right: 1vh;
  margin-top: 10px;
  width:100%;
`
export const typeContainer = css`
  display: flex;
  width:  100%;
`
export const textDetail = css`
  text-transform: capitalize;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const imageContainer = css`
  text-align-last: center;
`
export const btnCatch = css`
  box-shadow:inset 0px 2px 5px 7px #9e0000;
  background-color: #e00000;
  border-radius:5px;
  border:1px solid #566963;
  display:inline-block;
  cursor:pointer;
  color:#fcfcfc;
  font-family:Trebuchet MS;
  font-size:15px;
  font-weight:bold;
  padding:11px 20px;
  width: 100%;
  height: 58px;
  margin-bottom: 25px;
  margin-top: 15px;
  &:hover {
    background-color:#ff1f1f;
  }
  &:active {
    position:relative;
    top:4px;
  }
`
export const btnCatchContainer = css`
  margin: 1vh;
`
export const btnIconContainer = css`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`
export const pokeballIconBtn = css`
  height: 100%;
  margin-right: 5px;
`
export const movesContainer = css`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const movesCard = css`
  padding: 1rem;
  box-shadow:inset 0px 1px 3px 5px #ebd914;
  background-color: #ffa30f;
  text-align: center;
  border-radius: 8px;
  margin-left: 1vh;
  margin-right: 1vh;
`
export const movesText = css`
  width: 30%;
  text-align: left;
  margin-top: 2px;
  margin-bottom: 2px;
  text-transform: capitalize;
  @media (max-width: 721px) {
    width: 40%;
  }
  @media (max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`