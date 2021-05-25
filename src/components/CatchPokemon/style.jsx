import { css } from '@emotion/react'


//EMOTION CSS
export const contentContainer = css`
 padding-top: 2vh;
 text-align: -webkit-center;
`
export const pokemonImgCatched = css`
 width: 32vh; 
 background-color: #cccccc;
 border-radius: 20rem;
 margin: 1vh;
 border-style: outset;
`
export const imgGotcha = css`
 width: 25vh;
 margin-bottom: 10px;    
`
export const gotchaContainer = css`
 display:flex;
 flex-direction: column;
 align-items: center;
`
export const cardDetail = css`
 padding: 1rem;
 box-shadow:inset 0px 1px 3px 5px #33841f;
 background-color: rgba(255, 255, 255, 0.62);
 text-align: center;
 border-radius: 3rem;
 margin-top: 15px;
 width: 45vh;
 @media (max-width: 376px) {
   width: 34vh;
 }
`
export const detailContainer = css`
 display: flex;
 flex-direction: columm;
 margin-top: 5px;
 @media (max-width: 750px) {
   flex-direction: column;
   place-items: center;
 }
`
export const inputContainer = css`
 display: flex;
 flex-direction: column;
 width: 100%;
 text-align: left;
 justify-content: center;
 align-items: center;
`
export const inputName = css`
 padding: 5px;
 font-size: 16px;
 border-width: 4px;
 border-color: #CCCCCC;
 background-color: #FFFFFF;
 color: #000000;
 border-style: groove;
 border-radius: 6px;
 box-shadow: 3px 2px 0px rgba(66,66,66,.82);
 text-shadow: -50px 0px 0px rgba(66,66,66,.0);
 margin-top: 7px;
 width: 80%;
 &:focus{
   outline:none;
 }
`
export const inputNameError = css`
 padding: 5px;
 font-size: 16px;
 border-width: 4px;
 border-color: red;
 background-color: #FFFFFF;
 color: #000000;
 border-style: groove;
 border-radius: 6px;
 box-shadow: 3px 2px 0px rgba(66,66,66,.82);
 text-shadow: -50px 0px 0px rgba(66,66,66,.0);
 margin-top: 7px;
 width: 80%;
`
export const btnContainer = css`
 width: 100%;
 text-align: center;
`
export const btnSubmit = css`
 box-shadow:inset 0px 1px 3px 5px #ffd11a;
 background-color:#b38f00;
 border-radius:5px;
 border:1px solid #566963;
 display:inline-block;
 color:#fcfcfc;
 font-family:Trebuchet MS;
 font-size:15px;
 font-weight:bold;
 padding:11px 20px;
 width: 85%;
 margin-top: 10px;
 &:hover {
   background-color:#9e7c00;
 }
 &:active {
   position:relative;
   top:1px;
 }
`
export const btnSubmitError = css`
 box-shadow:inset 0px 1px 3px 5px #ffd11a;
 background-color:#b38f00;
 border-radius:5px;
 border:1px solid #566963;
 display:inline-block;
 cursor: disabled;
 color:#fcfcfc;
 font-family:Trebuchet MS;
 font-size:15px;
 font-weight:bold;
 padding:11px 20px;
 width: 85%;
 margin-top: 10px;
 &:active {
   position:relative;
   top:1px;
 }
`
export const notExist = css`
 display: none;
`
export const alertExist = css`
 color: red;
 margin-top: 10px;
 text-align: center;
`
export const btnReleased = css`
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
 width: 85%;
 margin-top: 5px;
 &:hover {
   background-color:#ff1f1f;
 }
 &:active {
   position:relative;
   top:1px;
 }
`
export const escapedContainer = css`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 30%;
 @media (max-width: 541px) {
   width: 90%;
 }
`
export const escapedImg = css`
 width: 32vh;
`
export const textEscaped = css`
 font-size: 120%;
`
export const btnBack = css`
 ${btnReleased}
 width: 80%;
 margin-top: 20px;
`