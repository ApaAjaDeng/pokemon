/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import * as GET_POKEMON_DETAIL from '../../graphQL/get-pokemon-detail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import PokeballIcon from '../../asset/pokeball_icon.png'
import { useHistory } from "react-router-dom";
import * as style from './style'


export const PokemonDetail = () => {
  let history = useHistory();

  //GET VARIABEL FROM URL
  const { name } = useParams();

  //GQL VARIABLES
  const gqlVariables = {
    name: name,
  };
  //CALLING GQLQUERY
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL.PokemonDetail_Query, {
    variables: gqlVariables,
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const btnCatchPokemon = () => {
    history.push('/catch-pokemon/' + name)
  }

  return (
    <div css={style.contentContainer}>
      <div css={style.imageContainer}>
        <img alt="Pokemon" src={data.pokemon.sprites.front_default} css={style.pokeImg}></img>
      </div>
      <br />
      <div css={style.nameContainer}>
        <text css={style.textName}>{name} | #{data.pokemon.id}</text>
      </div>
      <div css={style.typeContainer}>
        {data.pokemon.types.map(result =>
          <div css={style.typeCard}>
            <text css={style.textName}>{result.type.name}</text>
          </div>
        )}
      </div>
      <div css={style.detailContainer}>
        <div>
          <FontAwesomeIcon icon={faInfo} />
          <text css={style.detailText}> Stat Details</text>
        </div>
        <div css={style.textDetail}>
          <table srtle={{ width: '100%' }}>
            <tr>
              <td css={style.detailText}>Height:</td>
              <td css={style.detailTextStat}>{data.pokemon.height} m</td>
            </tr>
            <tr>
              <td css={style.detailText}>Weight:</td>
              <td css={style.detailTextStat}>{data.pokemon.weight} kg</td>
            </tr>
            {data.pokemon.stats.map(result =>
              <tr>
                <td css={style.detailText}>{result.stat.name}:</td>
                <td css={style.detailTextStat}>{result.base_stat}</td>
              </tr>
            )}
          </table>
        </div>
      </div>
      <div css={style.movesCard}>
        <div>
          MOVES
        </div>
        <div css={style.movesContainer}>
          {data.pokemon.moves.map(result =>
            <text css={style.movesText}>•{result.move.name}</text>
          )}
        </div>
      </div>
      <div css={style.btnCatchContainer} to={"/catch-pokemon"}>
        <button css={style.btnCatch} onClick={() => btnCatchPokemon()}>
          <div css={style.btnIconContainer}>
            <img alt='Pokeball' css={style.pokeballIconBtn} src={PokeballIcon}></img>
            Catch Pokémon
          </div>
        </button>
      </div>
    </div>
  )
}