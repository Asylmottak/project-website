import { useUserWeather } from "hooks/weather";
type WeatherIconProps = {
  size: number;
};
/**
 * Size in px
 * @return {JSX.Element} The JSX code for nav component.
 */
export const WeatherIcon = ({ size }: WeatherIconProps) => {
  const weatherData: any = useUserWeather();

  if (weatherData) {
    const currentTime = new Date();

    // Calculate the nearest hour
    const nearestHour = Math.round(
      currentTime.getHours() + currentTime.getMinutes() / 60
    );

    // Get the timeseries closest to current time
    const currentTimeseries = weatherData.properties.timeseries.filter(
      (timeseries: any) => {
        const timestamp = new Date(timeseries.time);
        return (
          timestamp.getHours() === nearestHour &&
          timestamp.getDay() === currentTime.getDay() &&
          timestamp.getMonth() === currentTime.getMonth()
        );
      }
    )[0];

    // Get the temperature from the data
    const temperature = currentTimeseries.data.instant.details.air_temperature;

    // Get the symbol-code from data -> same as image names
    const imageName = currentTimeseries.data.next_1_hours.summary.symbol_code;

    return (
      <>
        <p style={{ color: "white", fontSize: `${size / 3}px` }}>
          {temperature}°
        </p>
        <img
          className="img-responsive"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            height: `${size}px`,
          }}
          src={`/weather-icons/${imageName}.png`}
          alt="icon"
        />
      </>
    );
  }
  return (
    <p style={{ color: "white", fontSize: `${size / 3}px` }}>
      weather loading...
    </p>
  );
};
