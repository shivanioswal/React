import { Component } from "react";

class welcome extends Component
{
    render()
    {
        return( <h1>Hello World {this.props.name} or {this.props.heroName} !</h1>
        )
    }
}

export default welcome