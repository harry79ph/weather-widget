import React from "react";
import { Weather } from "../App";
import { Card, CardTitle, DetailsSection, DetailstWrap, Grid } from "./styled/Details.styled";

interface DetailsProps extends Weather {
    weatherData: Weather
}

const Details = ({ weatherData }: DetailsProps) => {
    
    const {description, feels_like = 0, temp_min = 0, temp_max = 0, humidity, speed = 0, deg = 0 } = weatherData;
    let gridData;
    const kelvinConverter = (kelvin: number) => {
        return (kelvin - 273).toFixed();
    }
    if (description) {
        gridData = [
            {title:'Feels Like', value: `${kelvinConverter(feels_like)}°C`},
            {title:'Min Temp', value: `${kelvinConverter(temp_min)}°C`},
            {title:'Max Temp', value: `${kelvinConverter(temp_max)}°C`},
            {title:'Humidity', value: `${humidity}%`},
            {title:'Wind Speed', value: `${(speed * 3.6).toFixed()}km/h`},
            {title:'Wind Direction', value: `${deg.toFixed()}°`}
        ];
    }
    return (
        <DetailsSection>
            <DetailstWrap>
                {description && (<Grid>
                    {gridData?.map(item => {
                        return (<Card key={item.title}>
                            <CardTitle>{item.title}:</CardTitle>
                            <p>{item.value}</p>
                        </Card>);
                    })}
                </Grid>)}
            </DetailstWrap>
        </DetailsSection>
    );
}
 
export default Details;