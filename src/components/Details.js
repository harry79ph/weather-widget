import { Card, CardTitle, DetailsSection, DetailstWrap, Grid } from "./styled/Details.styled";

const Details = ({ weatherData: { data, isPending, error } }) => {
    
    let gridData;
    if (data.main) {
        gridData = [
            {title:'Feels Like', value: `${(data.main.feels_like - 273.15).toFixed()}°C`},
            {title:'Min Temp', value: `${(data.main.temp_min - 273.15).toFixed()}°C`},
            {title:'Max Temp', value: `${(data.main.temp_max - 273.15).toFixed()}°C`},
            {title:'Humidity', value: `${data.main.humidity}%`},
            {title:'Wind Speed', value: `${(data.wind.speed * 3.6).toFixed()}km/h`},
            {title:'Wind Direction', value: `${data.wind.deg.toFixed()}°`}
        ];
    }
    return (
        <DetailsSection>
            <DetailstWrap>
                {data.main && (<Grid>
                    {gridData.map(item => {
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