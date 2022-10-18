import logo from './logo.svg';
import './App.css';
import GlobalStyle from './globalStyles.js';
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from './components/Themes.js';
import HomePage from './components/HomePage.js';
import ArtistsPage from './components/ArtistsPage';
import MusicianPage from './components/MusicianPage';
import EventPage from './components/EventPage';
import BrandPage from './components/BrandPage';
import SpecialPage from './components/SpecialPage';
import { render } from "react-dom";
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>

      <GlobalStyle />

      <ThemeProvider theme={darkTheme} >

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/ArtistsPage" element={<ArtistsPage />} />
          <Route path="/MusicicanPage" element={<MusicianPage />} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path="/BrandPage" element={<BrandPage />} />
          <Route path="/SpecialPage" element={<SpecialPage />} />

        </Routes>

      </ThemeProvider>

    </>
  );
}

export default App;
