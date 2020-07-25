import React, {useState, useEffect} from 'react';
import Test from './Test'
import './App.css';
import Search from './Search';

function App() {

  const [weatherData, setWeatherData] = useState({})

  const API_KEY = '0587c1a810696cce20c659888c3b9fee'
  // const CITY_NAME = 'Ahmedabad';
  
    //process.env.REACT_APP_API_URL = https://api.openweathermap.org/data/2.5
    // `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}` ----> Weather report
    // `${process.env.REACT_APP_API_URL}/forecast/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}` ----> Forecast Report




    // `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}` --------> weather report
  // useEffect(() => {
  //     const getWeatherData = async () => {  
  //       await fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${CITY_NAME}&units=metric&APPID=${API_KEY}`)
  //       .then(response => response.json())
  //         .then((data) => {
  //             console.log(data)
  //             const mappedData = mapDataToWeatherInterface(data);
  //             return mappedData;
  //         })
  //     } 
  //   getWeatherData()
  // }, [])

  // console.log(weatherData)


  // useEffect(() => {
  //       getWeather()
  //       .then(weather => {
  //         setWeatherData(weather);
  //         console.log(weather)
  //       })
  // }, []);

  async function getWeather(e) {
    const CITY_NAME = e.target.elements.city.value
    console.log(CITY_NAME)
    e.preventDefault()
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather/?q=${CITY_NAME}&units=metric&APPID=${API_KEY}`
    )
      .then(res => res.json())
      .then(weather => {
        if (Object.entries(weather).length) {
          const mappedData = mapDataToWeatherInterface(weather);
          console.log(weather)
          console.log(mappedData)
          return mappedData;
        }
      })
      .then(weather => {
          setWeatherData(weather);
          console.log(weather)
        })
  }

  function mapDataToWeatherInterface(data) {
    const mapped = {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      humidity: data.main.humidity,
      icon_id: data.weather[0].id,
      temperature: data.main.temp,
      description: data.weather[0].description,
      wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
      condition: data.cod,
      lon: data.coord.lon,
      lat: data.coord.lat
    };

    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }

    if (data.weather[0].icon) {
      mapped.icon = data.weather[0].icon;
    }

    if (data.main.temp_min && data.main.temp_max) {
      mapped.max = data.main.temp_max;
      mapped.min = data.main.temp_min;
    }

    // remove undefined fields
    Object.keys(mapped).forEach(
      key => mapped[key] === undefined && delete data[key]
    );

    return mapped;
  }

  return (
    <div className="App">
          <Search getWeather = {getWeather}/>
          <Test weather = {weatherData} />
    </div>
  );
}

export default App;
