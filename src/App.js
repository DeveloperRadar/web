import React, { useState, useEffect } from 'react';

import api from "./services/api";
import "./globals.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";


function App() {
  const [devs, setDevs] = useState([]);

  // Fetch all devs when component mounts
  useEffect(() => {
    async function fetchDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    fetchDevs();
  }, []);

  async function handleSend(data) {
    // Post dev data to API
    const response = await api.post("/devs", data);
    // Add dev to devs state
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DevForm handleSend={handleSend} />
      </aside>
      <main>
        <ul>
          { devs.map(dev => (<DevItem key={String(dev._id)} devData={dev} />)) }
        </ul>
      </main>
    </div>
  );
}

export default App;
