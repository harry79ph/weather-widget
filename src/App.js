import { Container } from "./components/styled/Container.styled";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Details from "./components/Details";
import { useState } from "react";

const theme = {
  colors: {
    text: '#fff',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  mobile: 'screen and (max-width: 768px)'
}

function App() {

  const [weather, setWeather] = useState({});


  const getWeatherData = async (location) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3c56e3850047c07fd72b2e8910868401`);
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log('Network Error:', error);
    }
  };
  console.log(weather);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <SearchBar getData={getWeatherData} />
        <MainContent />
        <Details />
      </Container>
    </ThemeProvider>
  );
}

export default App;
