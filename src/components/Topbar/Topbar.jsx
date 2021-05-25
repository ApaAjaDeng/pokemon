/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Logo from '../../asset/logo.png'
import * as style from './style'

function Topbar() {
  return (
    <div css={style.base}>
      <img alt='logo' css={style.logo} src={Logo}></img>
    </div>
  );
}

export default Topbar;