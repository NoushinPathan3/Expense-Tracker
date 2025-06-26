import { useState } from "react"

function Expensetracker(){
    const [data,setData]=useState([])
    const [budget,setBudget]=useState("")
    const [expense,setExpense]=useState("")
    const [input,setInput]=useState("")
    

    let id = data.length > 0 ? data[data.length - 1] : 1;
    function dataAppend(e){
        e.preventDefault()
        let size=data.length
        const newItem={
            id:id+1,
            name:expense,
            item:input
        }
        setData((data)=>[...data,newItem])
        setInput("")
        setExpense("")
    }
    function handeldelete(id) {
        setData((newData) => newData.filter((item) => item.id !== id));
    }
    function handleReset(){
        setBudget("");  
        setExpense(""); 
        setInput("");   
        setData([]); 
    }

    const totalExpenses = data.reduce((a, b) => a + Number(b.item), 0);
    const BalanceLeft = Number(budget)-totalExpenses
    
    return(
        <>
        <div className="container">
            <h1 className="head1">Budget Tracker System</h1>
            <div className="innnerBox">
                <div className="box1">
                    <h1>Add Budget</h1>
                    <label htmlFor="Budget">Budget:</label>   
                    <input type="text" id="Budget"
                    value={budget}
                    onChange={(e)=>setBudget(e.target.value)} />    
                    <p>Total Budget:{budget}</p>
                </div>
                <div className="box2">
                    <h1>Add Expense</h1>   
                    <label htmlFor="texp">Expense title</label>  
                    <input type="text" id="texp" value={expense} onChange={(e)=>setExpense(e.target.value)} /> <br/>
                    <label htmlFor="amt">Amount</label>   
                    <input type="text" id="amt" value={input} onChange={(e)=>setInput(e.target.value)}/>   
                    <button onClick={dataAppend} >Add Expense</button>    
                    <div className="res">
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </div>
                
                <div className="box3">
                <p>List are:{data.map((e)=>(<li key={e.id}>{e.name} {e.item}<button onClick={()=>handeldelete(e.id)}>Delete</button></li>))}</p>
                <p>Total Expenses are:{totalExpenses}</p>
                <p>Budget Left : {BalanceLeft}</p>
           </div>
            </div>
            {/* <div className="box3">
                <p>List are:{data.map((e)=>(<li key={e.id}>{e.name} {e.item}<button onClick={()=>handeldelete(e.id)}>Delete</button></li>))}</p>
                <p>Total Expenses are:{totalExpenses}</p>
                <p>Budget Left : {BalanceLeft}</p>
           </div> */}
        </div>
        </>
    )
}
export default Expensetracker