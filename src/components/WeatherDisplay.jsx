export default function WeatherDisplay({ data }) {
    if (!data) {
        return;
    }

    const { name, main, weather } = data;
    const { temp, feels_like, temp_min, temp_max, humidity } = main;
    const { description, icon } = weather[0];
    
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <img
                src={`http://openweathermap.org/img/wn/${icon}.png`}
                alt={description}
                className="w-20 h-20"
            />
            <p className="text-lg">{description}</p>
            <p>Temperature: {temp}°C</p>
            <p>Feels like: {feels_like}°C</p>
            <p>Min: {temp_min}°C</p>
            <p>Max: {temp_max}°C</p>
            <p>Humidity: {humidity}%</p>
        </div>
    );
}
