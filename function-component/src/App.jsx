import Greet from "../components/Greet";
import { Component } from "react";
import "./App.css";

class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <Greet/> 
        {/* We have called this component using an arrow function which is a function component  */}
      </div>
    )
  }
  
}

export default App
