import { useState, useEffect } from "react";

// The weather API
const url = `https://api.met.no/weatherapi/locationforecast/2.0/complete.json`;

// Return weather data for given position (longitude, latitude)
export const getWeather = async (pos: any) => {
  // fetches data from weather API
  const result = await fetch(url + `?lat=${pos.latitude}&lon=${pos.longitude}`);

  // Convert the result to json
  const resultJson = await result.json();
  return resultJson;
};

export const getUserLocation = async (setUserLocation: any) => {
  const success = async (pos: any) => {
    // Update the location of the user
    setUserLocation(pos.coords);
  };

  // Get user's current position
  await navigator.geolocation.getCurrentPosition(success);
};

// Returns weather data at the user's location
export const useUserWeather = () => {
  const [userPos, setUserPos] = useState(null);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getUserLocation(setUserPos);
  }, []);

  useEffect(() => {
    userPos &&
      getWeather(userPos).then((weatherData) => setWeather(weatherData));
  }, [userPos]);

  return weather;
};
