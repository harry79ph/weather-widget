import { Container } from "./components/styled/Container.styled";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Details from "./components/Details";
import useFetch from "./customhooks/useFetch";
import React, { useState } from "react";

export const theme = {
  colors: {
    text: '#fff',
    background: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.8)'
  },
  mobile: 'screen and (max-width: 768px)'
}

export interface Weather {
  description?: string;
  icon?: string;
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  humidity?: number;
  speed?: number;
  deg?: number;
  name?: string;
}

function App() {

  const [location, setLocation] = useState("");

  const handleLocation = (text: string) => {
    setLocation(text);
  }
  const {weather, isPending, error } = useFetch(location);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <SearchBar setLocation={handleLocation} />
        <MainContent weatherData={weather} isPending={isPending} error={error}/>
        <Details weatherData={weather} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
