import React from "react";
//import FilterData from "./Filter.js";
import FilterSource from "./FilterSource.js";
import StudentsFilter from "./StudentsFilter.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style = {{"fontSize":"50px", "color":"green"}}>React filter</h1>
      <FilterSource/>
      <StudentsFilter/>
    </div>
  );
}

export default App;
