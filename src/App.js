import { Container } from "./components/styled/Container.styled";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const theme = {
  colors: {
    text: '#fff',
    background: '#fff',
  },
  mobile: 'screen and (max-width: 768px)'
}

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=3c56e3850047c07fd72b2e8910868401`;
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <SearchBar />
        <MainContent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
