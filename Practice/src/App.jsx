import "./App.css";
import { useDebugValue, useEffect, useState } from "react";


// function App()
// {
//   const multiply=(a,b)=> a*b;
//   const myName='shivani';
//   return (
//     <div>
//       <h1>{multiply(1,2)}</h1>
//       <h2>{myName}</h2>
//     </div>
    
//   )
// }

// function App()
// {
//   const numbers=[1,2,3,4,5];
//   return(
    
// <>
// {numbers.map((number)=>(
        
//         <ul key={Math.random()*10}>
//         <li>{number}</li>
//         </ul>
      
//   ))}
// </>
      
    
//   )
// }

// function App()
// {
//   const userInfo=[
//     {
//       username: "ABC",
//       email: "ABC@gmail.com",
//       location: "UK"
//     },
//     {
//       username: "XYZ",
//       email: "XYZ@gmail.com",
//       location:"India",
//     },
//     {
//       username: "PQR",
//       email: "PQR@gmail.com",
//       location: "USA",
//     }
//   ];
//   return(
//     <>
//     {userInfo.map((userinfo)=>(
//       <ul key={Math.random()*10}>
//         <li>{userinfo.username}</li>
//         <li>{userinfo.email}</li>
//         <li>{userinfo.location}</li>
//       </ul>
//     ))}
//     </>
//   )
// }
// const User=(props)=>{
//   return(
//     <section>
//       <img src={props.img} alt={props.name} width={200} />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h2>Hobbies:{props.hobbies}</h2>
//     </section>
//   )
// }

// function App()
// {
//   return(
//     <>
//     <User img="data:image/jpeg;base64,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"
//     name="Shivani"
//     age={25}
//     hobbies={["reading", "dancing", "singing"]}/>
//     </>
//   )
// }

// const ValidPassword=()=> <h1>Valid Password</h1>
// const InvalidPassword=()=> <h1>Invalid Password</h1>

// const Password=({isValid})=>{
// if(isValid)
// {
//   return <ValidPassword/>
// }
// return <InvalidPassword/>
// };

// function App()
// {
//   <>
//   <Password isValid={true}/>
//   </>
// }

// const Cart=()=> {
//   const items=["wireless Earbuds","power bank","SSD","Hoodie"];
//   return(
//     <>
//     {items.length>0 && <h1>You have {items.length} items in your cart</h1>}
//     {items.map((item)=>
//     <ul key={Math.random()*10}>
//       <li>{item}</li>
//     </ul>
//     )}
//     </>
//   )
// }

// function App()
// {
//   return(
//     <>
//     <Cart/>
//     </>
//   )
// }

// const ValidPassword=()=><h1>Valid Password</h1>
// const InvalidPassword=()=><h1>InValid Password</h1>
// const Password=({isValid})=> {
//   return isValid ? <ValidPassword/> : <InvalidPassword/>
// };

// function App()
// {
//   return(
//     <>
//     <Password isValid={true}/>
//     </>
//   )
// }


// function App()
// {
//   return(
//     <>
//     <section>
//       <h1 style={{color:"pink",padding:"2px"}}>Inline Style</h1>
//     </section>
//     </>
//   )
// }

// function App()
// {
//   const s={
//     color: "pink",
//     backgroundColor:"teal"
//   }

//   return(
//     <>
//     <h1 style={{color:s.color,backgroundColor:s.backgroundColor}}>Inline</h1>
//     </>
//   )
// }

// const Button=()=>
// {
//   const handleClick=()=>
//   {
//     alert("You have clicked me");
//   };
//   return(
//     <>
//     <button onClick={handleClick}>Click on me !</button>
//     </>
//   )
// }

// function App()
// {
//   return(
//     <>
//     <Button/>
//     </>
//   )
// }

// 

// const Counter=()=>{
//   const [count,setCount]=useState(0);

//   const increment=()=>
//   {
//     setCount(count+1);
//   }

//   const decrement=()=>
//   {
//     setCount(count-1);
//   }
   
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>-</button>
//     </>
//   )
// }

// function App()
// {
//   return(
//     <>
//     <Counter/>
//     </>
//   )
// }

// function App()
// {
//   const[friends,setFriends]=useState(['Alex','John']);
//   //const addOne=()=>setFriends[...friends,'Peter'];
//   const removeOne=()=>setFriends(friends.filter((f)=>f!=="Alex"));
//   const updateOne=()=>setFriends((f)=>(f==="John"?"Alex Smith":f));

//   return(
//     <>
//     {friends.map((f)=>
//     <li key={Math.random()*10}>{f}</li>

//     )}

    
//     <button onClick={removeOne}>Remove</button>
//     <button onClick={updateOne}>Update</button>
//     </>
//   )
// }



// function App()
// {
//   const[movie,setMovie]=useState({title:"Equalizer",ratings:3});
//   const handleClick=()=>{
//     const copyMovie={...movie,ratings:5}
//     setMovie(copyMovie);
//     }
  

//   return(
//     <>
//     <h1>{movie.title}</h1>
//     <h1>{movie.ratings}</h1>
//     <button onClick={handleClick}>Change rating</button>
    
//     </>
//   )
// }


// function App()
// {
//   const [movies,setMovies]=useState([
//     {id:1,title:"spiderman",rating:3},
//     {id:2,title:"superman",rating:5}
//   ]);
//   const handleClick=()=>{
//   setMovies(
//     movies.map((m)=>m.id==1?{...movies,title:"John Wick 4"}:m)
//   );
//   };
//   return(
//     <>
//     {movies.map((m)=>
//     <ul key={Math.random()}>{m.title}</ul>
    
    
//     )}
//     <button onClick={handleClick}>Click Me</button>
    
//     </>
//   )
// }

function App()
{
  const [value,setValue]=useState(0);
  useEffect(()=>
  console.log("Hello"),
  document.title=`Increment (${value})`;
  )

return(
  <>
  <h1>{value}</h1>
  <button onClick={()=>setValue(value+1)}>Click Me</button>
  </>
)
}

export default App