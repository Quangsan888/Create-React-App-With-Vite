import React,{useEffect, useState} from "react"

function DigitalClock(){
     
   const [time,setTime] = useState(new Date());

   useEffect( ()=>{
        const intervalId= setInterval(()=>{
            setTime(new Date());


            return ()=>{
                clearInterval(intervalId)
            }
        }, 1000); 
   }, []);

  

    function   formatTime(){
          let hours = time.getHours();
          const minutes = time.getMinutes();
          const  seconds = time.getSeconds();

          const meridiem = hours >= 12 ? "PM" : "AM";

          hours = hours % 12 || 12;

          return `${padZero(hours)}:${minutes}:${seconds} ${meridiem}`;
    }
  

    function padZero(number){
       return  (number < 10  ? "0" : "") + number
    }
    return(
        <div className="clock-container">
               <div className="clock">
                    <span>{formatTime()}</span>
                </div>    
        </div>
    )
}

export default DigitalClock