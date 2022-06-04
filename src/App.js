import { Container } from "./components/styled/Container.styled";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Details from "./components/Details";

const theme = {
  colors: {
    text: '#fff',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  mobile: 'screen and (max-width: 768px)'
}

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <SearchBar />
        <MainContent />
        <Details />
      </Container>
    </ThemeProvider>
  );
}

export default App;
