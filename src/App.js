import logo from './logo.svg';
import './App.css';
import GlobalStyle from './globalStyles.js';
import { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme} from './components/Themes.js';

function App() {
  return (
    <>

      <GlobalStyle />

      <ThemeProvider theme={darkTheme} >

        Stuff

      </ThemeProvider>

    </>
  );
}

export default App;
