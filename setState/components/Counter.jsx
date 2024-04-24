import { Component } from "react";

class Counter extends Component
{
    constructor(props)
    {
        super(props)
        
            this.state = {
                count: 0
            }
        
    }
    increment()
    {
        // this.setState({
        //     count: this.state.count + 1

        // },()=>{
        //     console.log('callback value',this.state.count)
        // })
        this.setState(prevState=>({
            count: prevState.count+1
    }))
        console.log(this.state.count) 
        //outside the setState method. Synchronous console.log 0 comes from here
    }
    render()
    {
        return(
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
            </div>

        )
    }
}
export default Counter