import React, { useState, useEffect } from "react";

function DevForm({ handleSend }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [techs, setTechs] = useState("");
  const [github_username, setGithubUsername] = useState("");

  // Get geolocation when App mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      github_username,
      techs,
      latitude,
      longitude
    };
    // Post data
    await handleSend(data);

    // Reset state
    setGithubUsername("");
    setTechs("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Github Username</label>
        <input
          id="github_username"
          name="github_username"
          type="text"
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Techs</label>
        <input
          id="techs"
          name="techs"
          type="text"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            id="latitude"
            name="latitude"
            type="text"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required
            />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            id="longitude"
            name="longitude"
            type="text"
            value={longitude}
            required
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default DevForm;
