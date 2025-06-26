function Todo(props){
    return(
        <>
        {props.index &&(
        <>
        <div className="Container">
            <p>{props.item}</p>
            <button onClick={()=>props.delete(props.index)}>Delete</button>
        </div>
        </>
        )}
        </>
    )
}
export default Todo;