/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Topbar from './components/Topbar/Topbar'
import Routes from './Routes'
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Route} from 'react-router-dom';
import CatchPokemonScreen from './view/CatchPokemonScreen'
import { Global } from '@emotion/react';


function App() {
  return (
    <div>
      <Router>
        <Global
          styles={css`
            *{
              font-family: "Lucida Console", sans-serif;
            }
          `}
        />
        <Topbar />
        <Routes />
        <Route
          componen={CatchPokemonScreen}
          exact
          path='/catch-pokemon'
        />
        <Navbar />
      </Router>
    </div >
  );
}

export default App;
