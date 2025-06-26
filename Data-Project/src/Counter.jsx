import {React,useState} from "react";
function Counter(){
    const [count,setCount]=useState(0)
    return(
        <>
        <div style={{textAlign:"center", marginTop:"10%"}}>
            <h1 style={{fontSize:"34px"}}>Counter</h1><br />
            <p style={{fontSize:"20px"}}>Count:{count}</p> <br />
            <button onClick={()=> setCount(count+1)} style={{height:"40px", width:"100px",fontSize:"20px", margin:"0 10px"}}>Increment</button>
            <button onClick={()=> setCount(count-1)} style={{height:"40px", width:"120px",fontSize:"20px",margin:"0 10px"}}>Decrement</button>
            <button onClick={()=> setCount(0)} style={{height:"40px", width:"100px",fontSize:"20px",margin:"0 10px"}}>RESET</button>
        </div>
        </>
    )
}
export default Counter;