import React,{useState} from "react"

function Counter(){
   
    const [count,setCount]=useState(0);


    const handlingCount = ()=>{
        setCount(count+1);
    }

    return(

        <div>
            <p>{count}</p>
            <button onClick={handlingCount}>Increase</button>
        </div>
    )
}

export default Counter