import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/GlobalStyle";
import { theme } from "../assets/theme";
import Navbar from "../components/molecules/Navbar/Navbar";
import Home from "../components/organisms/HomeComponent/Home";
import Levels from "../components/organisms/LevelsComponent/Levels";
import LevelFirst from "../components/organisms/LevelsComponent/LevelFirst/LevelFirst";
import LevelSecond from "../components/organisms/LevelsComponent/LevelFirst/LevelSecond";
import LevelsProvider from "./LevelsProvider";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LevelsProvider>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/levels" element={<Levels />} />
              <Route path="/levelfirst" element={<LevelFirst />} />
              <Route path="/levelsecond" element={<LevelSecond />} />
            </Route>
          </Routes>
        </LevelsProvider>
      </ThemeProvider>
    </>
  );
};

export default Root;
