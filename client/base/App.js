import React, { useState } from "react";
import { API } from "aws-amplify";

import "./App.css";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [name, setName] = useState("");

  const wasGreeted = async () => {
    const response = await API.get("greetingsEndpoint", "/hello", {
      queryStringParameters: {
        name: name,
      },
    });

    setShowResult(true);
    setApiMessage(response);
  };

  const greet = async () => {
    await API.post("greetingsEndpoint", "/hello", {
      queryStringParameters: {
        name: name,
      },
    });

    setShowResult(true);
    setApiMessage(`Hola ${name}`);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Greeter</h1>
        <input type="text" onChange={handleChange} />
        <button onClick={wasGreeted}>Was greeted?</button>
        <button onClick={greet}>Greet</button>
        <div>
          {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
        </div>
      </header>
    </div>
  );
}

export default App;
