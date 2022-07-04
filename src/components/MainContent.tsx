import React from "react";
import { Weather } from "../App";
import { City, Location, MainContentWrap, MainTemp, SpaceHolder, WeatherIcon } from "./styled/MainContent.styled";

interface MainProps extends Weather {
    weatherData: Weather
    isPending: boolean;
    error: string;
}

const MainContent = ({ weatherData, isPending, error }: MainProps) => {
    
    const {description, icon, temp = 0, name } = weatherData;

    return (
        <MainContentWrap>
            {isPending && <SpaceHolder>Loading...</SpaceHolder>}
            {error && <SpaceHolder>{error}</SpaceHolder>}
            {description && (<>
                <WeatherIcon>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                </WeatherIcon>
                <MainTemp>{(temp - 273.15).toFixed()}°C</MainTemp>
                <Location>
                    <City>{name}</City>
                    <p>{description}</p>
                </Location>
            </>)}
        </MainContentWrap>
    );
};

export default MainContent;
