import { useState } from "react";

const KEY_WEATHER = '6ee1dd5dfd29377c817bd1a70ad363de';

function Weather(): JSX.Element {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState<any>({});
    
    function onClickSearchWeather() {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${KEY_WEATHER}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                setWeather(result)});
    }

    return (
    <article className="weather promo__block promo__block--barbershop">
        <form>
            <input className="weather__input" type="text" placeholder="город" onChange={(event) => setSearch(event.target.value)}></input>
            <button className="weather__button" type="submit" onClick={onClickSearchWeather}>узнать погоду</button>
        </form>
        {weather.name !== undefined ? (
            <div>
                <h3 className="weather__city">{weather.name}</h3>
                <p className="weather__temperature">{weather.main.temp}</p>
                <p className="weather__condition">{weather.weather[0].main}</p>
            </div>
        ) : null}
    </article> 
    );
}

export default Weather;