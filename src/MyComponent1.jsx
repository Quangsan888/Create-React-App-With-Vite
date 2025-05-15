
import React,{useState} from "react"
function MyComponent1(){
    const [name,setName]=  useState("Guest");
    const [age,setAge]=  useState(0);
    const [isEmployed,setisEmployed]=  useState(false);

    const updateName = ()=>{
        setName("ads")
        console.log(name);
    }

    const updateAge = ()=>{
        setAge(18)
        console.log(age);
    }

    const updateEmploy = ()=>{
        setisEmployed(true)
        console.log(isEmployed);
    }
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Update name</button>
            <p>Age:{age}</p>
            <button onClick={updateAge}>Update age</button>
            <p>Is emplpyee :{isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateEmploy}>Update isemploy</button>
        </div>
    )
}

export default MyComponent1