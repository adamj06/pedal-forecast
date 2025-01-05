import { useState } from "react";

export default function WeatherDisplay({ data }) {
    if (!data) {
        return;
    }

    const { name, main, weather } = data;
    const { temp, feels_like, temp_min, temp_max, humidity } = main;
    const { description, icon } = weather[0];
    
    return (
        <div>
            <h1>{name}</h1>
            <img
                src={`http://openweathermap.org/img/wn/${icon}.png`}
                alt={description}
            />
            <p>{description}</p>
            <p>Temperature: {temp}°C</p>
            <p>Feels like: {feels_like}°C</p>
            <p>Min: {temp_min}°C</p>
            <p>Max: {temp_max}°C</p>
            <p>Humidity: {humidity}%</p>
        </div>
    );
}
