import "./App.css";
import Greet from "../component/Greet";
import { Component } from "react";
import Welcome from "../component/Welcome";

class App extends Component
{
  render(){
    return(
      <div className="App">
        <Greet name="Bruce" heroName="Batman" >
          <p>This is Children Props</p>
        </Greet>
        <Greet name="Clark" heroName="Spiderman"/>
        <Greet name="Diana" heroName="Wonder Women"/>
        <Welcome name="Bruce" heroName="Superman" />
      </div>
    )
  }
}

export default App