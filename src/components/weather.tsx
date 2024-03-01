import { useState } from "react";
import "../styles/weather.css";

const KEY_WEATHER = '6ee1dd5dfd29377c817bd1a70ad363de';

function Weather(): JSX.Element {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState<any>({});
    
    function onClickSearchWeather(e: any) {
        e.preventDefault();
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${KEY_WEATHER}`)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                setWeather(result)});
    }

    return (
    <article className="weather promo__block bg-pan-tr">
        <form className="weather__form header__search">
            <label className="visually-hidden">Введите свой город</label>
            <input className="weather__input header__search-input form__input" type="text" placeholder="город" onChange={(event) => setSearch(event.target.value)}></input>
            <button className="weather__button header__search-button button" type="submit" onClick={onClickSearchWeather}>
            <svg className="weather__icon header__search-icon" width="18" height="18">
                <use xlinkHref="#icon-search"></use>
              </svg>
              <span className="visually-hidden">Начать поиск</span>
            </button>
        </form>
        {weather.name !== undefined ? (
            <div className="weather__info">
                <h3 className="weather__city">{weather.name}</h3>
                <p className="weather__temperature">{Math.round(weather.main.temp - 273)}°C</p>
                <p className="weather__condition">{weather.weather[0].main}</p>
            </div>
        ) : null}
    </article> 
    );
}

export default Weather;