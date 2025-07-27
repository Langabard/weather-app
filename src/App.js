import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [city] = useState("Tbilisi");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8d29e12d52782e7e42409cdd62f69fd&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, [city]);

  return (
    <div className="App">
      <div className="Wrapp">
        <h1 className="title">Weather</h1>
        {weather ? (
          <>
            <p>Temperature: {weather.main.temp}°C</p>
            <p> Condition: {weather.weather[0].description}</p>
          </>
        ) : (
          <p> Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
