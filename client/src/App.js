import React from "react";
import "./styling.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </div>
  );
}

export default App;
