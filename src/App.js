import { Container } from "./components/styled/Container.styled";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Details from "./components/Details";
import useFetch from "./components/useFetch";

export const theme = {
  colors: {
    text: '#fff',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  mobile: 'screen and (max-width: 768px)'
}

function App() {

  const { weather, isPending, error, getWeatherData } = useFetch();
  const weatherData = {data: weather, isPending, error};

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <SearchBar getData={getWeatherData} />
        <MainContent weatherData={weatherData} />
        <Details weatherData={weatherData} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
