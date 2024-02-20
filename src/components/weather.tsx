const KEY_WEATHER = '6ee1dd5dfd29377c817bd1a70ad363de';

function Weather(): JSX.Element {

    async function getWeather(event: any) {
        event.preventDefault();
        const city = event.target.elements.city.value;

        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_WEATHER}`);
        const result = await api.json();
        console.log(result);
    }

    return (
    <article className="weather promo__block promo__block--barbershop">
        <form onSubmit={getWeather}>
            <input className="weather__input" type="text" name="city" placeholder="город"></input>
            <button className="weather__button" type="submit">узнать погоду</button>
        </form>
        <h3 className="weather__city">{}</h3>
        <span className="weather__temperature">{}</span>
    </article> 
    );
}

export default Weather;