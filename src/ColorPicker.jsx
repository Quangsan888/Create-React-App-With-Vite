import React,{useState} from "react"
function ColorPicker(){


    const [color,setColor]=useState("")

     function handleColor(event){
          setColor(event.target.value)
     }
    return(
        <div className="color-picker"> 
            <h2 className="color-title">Color Picker</h2>
            <div className="color-display" style={{backgroundColor: color}}>
             <p>select color {color}</p>
            </div>


            <label htmlFor=""></label>
            <input type="color" value={color} onChange={handleColor} />
        </div>
    )
}

export default ColorPicker