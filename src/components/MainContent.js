import { City, Desc, Location, MainContentWrap, MainTemp } from "./styled/MainContent.styled";

const MainContent = () => {
    return (
        <MainContentWrap>
            <MainTemp>16°C</MainTemp>
            <Location>
                <City>London</City>
                <p>13:00 Friday</p>
            </Location>
            <Desc>Clouds</Desc>
        </MainContentWrap>
    );
};

export default MainContent;
