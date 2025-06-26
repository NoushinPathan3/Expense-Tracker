import { useState } from "react";
import Todo from "./Todo";

function TodoList(){
    const[data,setData]=useState([])
    const[input,setInput]=useState("")
    const[count,setCount]=useState(0)
    function handleinput(e){
        setInput(e.target.value)
    }
    function dataAppend(e){
        e.preventDefault()
        let size=data.length
        const newTask={
            id:size+1,
            task:input
        }
        setCount(count+1)
        setData((data)=>[...data,newTask])
        setInput("")
    }
    function handleDelete(id){
        const newData=data.filter((e)=>e.id!=id)
        setData(newData)
        setCount(count-1)
    }
    
    const listOfTodos=data.map((e)=><Todo key={e.id} index={e.id} item={e.task} delete={handleDelete}/>)
    return(
        <>
        <div className="todo_container">
            <h1>Total Tasks:{count}</h1>
            <form action="" className="tform" onSubmit={dataAppend}>
                <input type="text" name="todos" placeholder="Enter your To-Do plan" value={input} onChange={handleinput} />
                <button>Add</button>
            </form>
        </div>
        <h1>List to Do</h1>
        <hr />
        {listOfTodos}
        </>
    )
}
export default TodoList