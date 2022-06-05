import { useState } from "react";

const useFetch = () => {
  const [weather, setWeather] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const getWeatherData = async (location) => {
    setIsPending(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3c56e3850047c07fd72b2e8910868401`
      );
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      setIsPending(false);
      setError("");
      setWeather(data);
    } catch (error) {
      setIsPending(false);
      setError("Network Error");
      console.log("Network Error:", error);
    }
  }
  return { weather, isPending, error, getWeatherData };
};


export default useFetch;
