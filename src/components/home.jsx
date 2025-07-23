

import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!city.trim()) {
        setError("City name cannot be empty.");
      } else {
        setError("");
        localStorage.setItem("city", city.trim());
        navigate("/weather");
      }
    },
    [city, navigate]
  );

  return (
    <div className="home">
      <h1>SkyCast</h1>
      <p>Find My Weather</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
