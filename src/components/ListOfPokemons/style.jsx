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
export const pageBtnContainer = css`
  display: flex;
  flex-direction: row;
  place-content: center;
  padding-bottom: 25px;
  padding-top: 3vh;
`
export const btnPage = css`
  box-shadow:inset 0px 1px 3px 5px #ffd11a;
  background-color:#b38f00;
  border-radius:5px;
  border:1px solid #566963;
  display:inline-block;
  cursor:pointer;
  color:#fcfcfc;
  font-family:Trebuchet MS;
  font-size:15px;
  font-weight:bold;
  padding:11px 20px;
  &:hover {
    background-color:#9e7c00;
  }
  &:active {
    position:relative;
    top:1px;
  }
`
export const btnNext = css`
  ${btnPage};
  margin-left: 15px;
`
export const btnPrev = css`
  ${btnPage};
  margin-right: 15px;
`
export const pageNumber = css`
  font-size: 3vh;
  align-self: center;
`
export const textName = css`
  ${text};
  font-style: normal;
  font-weight: bold;
`
export const textCount = css`
  ${textName};
  margin-left: 3px;
  padding-bottom: 0;    
  margin-top: auto;
  margin-bottom: auto;
`
export const countContainer = css`
  display: flex;
  align-self: center;    
  justify-content: center;
  margin-top: 5px;
`
export const pokeballImg = css`
  width: 20%;
`