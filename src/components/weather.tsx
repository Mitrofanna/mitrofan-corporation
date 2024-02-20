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
    <article className="promo__block promo__block--barbershop">
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="город"></input>
            <button type="submit">узнать погоду</button>
        </form>
    </article> 
    );
}

export default Weather;