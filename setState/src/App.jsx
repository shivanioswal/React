import "./App.css";
import { Component } from "react";
import Counter from "../components/Counter";

class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <Counter/>
      </div>
    )
  }
}
export default App