const Greet=props=>{
    console.log(props)
    return (<div> <h1>Hello {props.name} or {props.heroName}</h1>
    {props.children}
    </div>)
}

export default Greet