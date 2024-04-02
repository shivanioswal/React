import Greet from "../components/Greet";
import { Component } from "react";

class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <Greet/> 
        {/* We have called this component using an arrow function which is function component  */}
      </div>
    )
  }
  
}

export default App
