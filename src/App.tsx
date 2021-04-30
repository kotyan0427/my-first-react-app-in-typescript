import React from "react";
import { Counter } from "./Counter";

type Props = {
  message?: string;
  name: string;
};

const App: React.VFC<Props> = ({ message, name }) => {
  return (
    <div>
      {/* {message} */}
      {/* {name} */}
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: "Hello defaultProps",
  name: "Kotyan",
};

export default App;
