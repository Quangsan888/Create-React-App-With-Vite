import React,{useState} from "react"

function Counter(){
   
    const [count,setCount]=useState(0);


    const handlingCount = ()=>{
        setCount(count+1);
        // setCount(c = > c + 1) này là callback giúp mình update rõ cập nhập giá trị trước đó khi , khác vs setCount(count + 1) cập nhập trực tiếp 
        
    }

    return(

        <div>
            <p>{count}</p>
            <button onClick={handlingCount}>Increase</button>
        </div>
    )
}

export default Counter