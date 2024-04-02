import { Component } from "react";
import Greet from "../components/Greet";
import { Study } from "../components/Greet";
import "./App.css";

class Example extends Component{
  render()
  {
    return(
      <div>
        <Greet/>
        <Study/>
      </div>
    )
  }
}

export default Example