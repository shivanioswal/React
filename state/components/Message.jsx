import { Component } from "react";

class Message extends Component
{
    constructor()
    {
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }
    changeMessage()
    {
        this.setState({
            // Gives new state of the component
            message: "Thank you for subscribing"
        })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe!</button>

            </div>
            
        )
    }
}

export default Message