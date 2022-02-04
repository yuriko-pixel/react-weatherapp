import React from 'react'
import {CurrentWeather, initData} from './Types'
import {getWeatherIcon} from './weathers'

export default function App() {
  const [data, setData]: [
    CurrentWeather,
    React.Dispatch<React.SetStateAction<CurrentWeather>>
  ] = React.useState<CurrentWeather>(initData);
  const [weatherIcon, setWeatherIcon] = React.useState();

  function getCoordinates(position: { coords: { latitude: number; longitude: number; }; }) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(getCoordinates);
  }
  function createMarkup(arg: string) {
    return { __html: arg };
  }
  React.useEffect(() => {
    getLocation();
    
  }, []);
  return <div className="App">
    <h3>{data.name}</h3>
    <div dangerouslySetInnerHTML={createMarkup(getWeatherIcon(data.weather[0].id, data.weather[0].icon))} />
    <p>{data.weather[0].description}</p>
    </div>;
}
