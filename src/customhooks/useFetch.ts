import { useState, useEffect } from "react";
import { Weather } from "../App";

const useFetch = (location: string) => {
  const [weather, setWeather] = useState({} as Weather);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (location) {
      (async () => {
        try {
          setIsPending(true);
          setError("");
          setWeather({});
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3c56e3850047c07fd72b2e8910868401`
          );
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          const data = await response.json();
          const { weather: mainWeather, main, wind, name } = data;
          const { main: description, icon } = mainWeather[0];
          const { temp, feels_like, temp_min, temp_max, humidity } = main;
          const { speed, deg } = wind;
          setIsPending(false);
          setError("");
          setWeather({description, icon, temp, feels_like, temp_min, temp_max, humidity, speed, deg, name});
        } catch (error) {
          setIsPending(false);
          setError("Location could not be found");
          console.log("Network Error:", error);
        }
      })();
    }
  }, [location]);

  return { weather, isPending, error };
};

export default useFetch;
