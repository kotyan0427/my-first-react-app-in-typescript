import React from "react";
import "./App.css";

interface Props {
  message: string;
  name: string;
}

function App({ message, name }: Props) {
  return (
    <div className="App">
      {message}
      {name}
    </div>
  );
}

export default App;
