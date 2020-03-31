import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./actions/fetchWeather";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function App() {
    const [city, setCity] = useState("");
    const weatherSelector = useSelector((state) => state)
    const dispatch = useDispatch();
    const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

    const getWeatherInfo = (e) => {
        e.preventDefault();
        if (city === "") {
            console.log("no city to search for");
        }
        else {
            getWeatherInfoAction(city);
            console.log(weatherSelector.weatherinfo)
        }

    }
    function visibility(visibility) {
        if (visibility) {
            return (
                <span className="secondd">Visibility {visibility} km;</span>
            )
        }
    }

    function feels_like(feels) {
        if (feels) {
            return (
                <span className="secondd">Feels Like {feels}&deg;</span>
            )
        }
    }
    function humidity(hum) {
        if (hum) {
            return (
                <span className="secondd">Humidity {hum}%</span>
            )
        }
    }
    let details = "";
    if (weatherSelector.weatherinfo) {
        details = <div className="details">
            <div className="container">
                <br>
                </br>
                <div className="cards">
                    <h1>{weatherSelector.weatherinfo.location.name}, {weatherSelector.weatherinfo.location.country}</h1>
                    <br>
                    </br>
                    <div className="clim">
                        <span className="px-4">
                            <img src={weatherSelector.weatherinfo.current.weather_icons} />
                        </span>
                        <span className="px-4">
                            {weatherSelector.weatherinfo.current.temperature}C°
                    </span>
                    </div>
                    <br>
                    </br>
                    <h4 className="py3">{weatherSelector.weatherinfo.current.weather_descriptions}</h4>
                    <div className="second">
                        <span className="px-4">
                            {humidity(weatherSelector.weatherinfo.current.humidity)}
                        </span>
                        <span className="px-4">
                            {feels_like(weatherSelector.weatherinfo.current.feels_like)}
                        </span >
                        <span className="px-4">
                            {visibility(weatherSelector.weatherinfo.current.visibility)}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    }

    return (
        <React.Fragment>
            <div className="App">

                <br></br>
                <main>
                    <div className="container" >
                        <form onSubmit={getWeatherInfo}>
                            <div className="row">
                                <div className="col-md-3 offset-md-2">
                                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City" onChange={e => setCity(e.target.value)} />
                                </div>
                                <div className="col-md-3 mt-md-0 text-md-left">
                                    <div className="bton">
                                        <button className="btn  waves-effect">Get Weather</button>
                                    </div>

                                </div>

                            </div>
                        </form>

                    </div>

                    {details}


                </main>
            </div>
        </React.Fragment >



    );
}
export default App;