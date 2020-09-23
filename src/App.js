import React from "react";
import data from "./data/colleges.json";
import Colleges from "./colleges/colleges";

function App() {
  return (
    <React.Fragment>
      <Colleges data={data} />
    </React.Fragment>
  );
}

export default App;
