import React from "react";
import { CounterWithReducer } from "./CounterWithReducer";

type Props = {
  message?: string;
  name: string;
};

const App: React.VFC<Props> = ({ message, name }) => {
  return (
    <div>
      {/* <Counter /> */}
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: "Hello defaultProps",
  name: "Kotyan",
};

export default App;
