import SpaceHolder from "./SpaceHolder";
import { City, Location, MainContentWrap, MainTemp, WeatherIcon } from "./styled/MainContent.styled";

const MainContent = ({ weatherData: { data, isPending, error } }) => {
    
    return (
        <MainContentWrap>
            {isPending && <SpaceHolder>Loading...</SpaceHolder>}
            {error && <SpaceHolder>{error}</SpaceHolder>}
            {data.main && (<>
                <WeatherIcon>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main} />
                </WeatherIcon>
                <MainTemp>{(data.main.temp - 273.15).toFixed()}°C</MainTemp>
                <Location>
                    <City>{data.name}</City>
                    <p>{data.weather[0].main}</p>
                </Location>
            </>)}
        </MainContentWrap>
    );
};

export default MainContent;
