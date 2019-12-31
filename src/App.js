import React from "react";
import "./App.css";
import Banner from "./components/banner";

const handleSearch = e => {
  const msg = e.target.value;
  if (msg === "") {
    console.log("empty")
  } else {
    console.log(e.target.value);
  }
}

const handleAdd = e => {
  
}

function App() {
  return (
    <Banner searchHandler={handleSearch} />
  );
}

export default App;
