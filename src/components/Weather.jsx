import { useState } from "react";
import { getWeather } from "../api";
import photo from "../Assests/cloud_img.png";
export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setData(null);
    try {
      const res = await getWeather(city);
      if (res.detail) setError(res.detail);
      else setData(res);
    } catch {
      setError("Unable to fetch weather");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌦️ Live Weather Report</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div className="weatherReport">
          <img src={photo} />
          <div className="temp">{Math.floor(data.temperature)}°<span className="cellicus">C</span></div>
          <div className="ReportContent">
          <p>City: <strong>{data.city}</strong></p>
          <p>Temperature: <strong > {data.temperature}°C </strong></p>
          <p>Condition: <strong>{data.condition}</strong></p>
          <p>Humidity: <strong>{data.humidity}%</strong></p>
          </div>
        </div>
      )}
    </div>
  );
}
