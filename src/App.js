import React from "react";
//import FilterData from "./Filter.js";
//import FilterSource from "./FilterSource.js";
//import StudentsFilter from "./StudentsFilter.js";
import "./App.css";
import Data1Filter from "./Data1Filter.js";

function App() {
  return (
    <div className="App">
      <h1 style = {{"fontSize":"50px", "color":"green"}}>React filter</h1>
      {/* <FilterSource/> */}
      {/* <StudentsFilter/> */}
      <Data1Filter/>
    </div>
  );
}

export default App;
